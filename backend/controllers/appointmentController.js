// controllers/appointmentController.js
// Purpose: Handles booking, listing, updating status, and deleting appointments.
// Why it exists: Encapsulates appointment business rules (e.g. validating
// the doctor exists before booking) away from route definitions.

const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const { sendSuccess, sendError } = require("../utils/responseHandler");
const {
  isValidObjectIdFormat,
  isNonEmptyString,
  isValidPhone,
} = require("../utils/validators");

const VALID_STATUSES = ["Pending", "Confirmed", "Completed", "Cancelled"];

// @route   POST /api/appointments
// @desc    Book a new appointment
// @access  Public
const bookAppointment = async (req, res) => {
  try {
    const {
      patientName,
      phone,
      department,
      doctor,
      appointmentDate,
      appointmentTime,
    } = req.body;

    if (
      !isNonEmptyString(patientName) ||
      !isValidPhone(phone) ||
      !isNonEmptyString(department) ||
      !isNonEmptyString(doctor) ||
      !appointmentDate ||
      !isNonEmptyString(appointmentTime)
    ) {
      return sendError(
        res,
        400,
        "patientName, valid phone, department, doctor, appointmentDate and appointmentTime are required"
      );
    }

    if (!isValidObjectIdFormat(doctor)) {
      return sendError(res, 400, "Invalid doctor ID format");
    }

    const doctorExists = await Doctor.findById(doctor);
    if (!doctorExists) {
      return sendError(res, 404, "Selected doctor does not exist");
    }

    const parsedDate = new Date(appointmentDate);
    if (isNaN(parsedDate.getTime())) {
      return sendError(res, 400, "Invalid appointmentDate format");
    }

    const appointment = await Appointment.create({
      patientName,
      phone,
      department,
      doctor,
      appointmentDate: parsedDate,
      appointmentTime,
    });

    const populated = await appointment.populate(
      "doctor",
      "name specialization hospital"
    );

    return sendSuccess(res, 201, "Appointment booked successfully", {
      appointment: populated,
    });
  } catch (error) {
    return sendError(res, 500, "Failed to book appointment", { details: error.message });
  }
};

// @route   GET /api/appointments
// @desc    Get all appointments, optional ?status= filter
// @access  Private/Admin
const getAllAppointments = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};

    if (status) {
      if (!VALID_STATUSES.includes(status)) {
        return sendError(res, 400, `status must be one of: ${VALID_STATUSES.join(", ")}`);
      }
      filter.status = status;
    }

    const appointments = await Appointment.find(filter)
      .populate("doctor", "name specialization hospital")
      .sort({ bookedAt: -1 });

    return sendSuccess(res, 200, "Appointments fetched successfully", {
      appointments,
      count: appointments.length,
    });
  } catch (error) {
    return sendError(res, 500, "Failed to fetch appointments", { details: error.message });
  }
};

// @route   GET /api/appointments/:id
// @access  Private
const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectIdFormat(id)) {
      return sendError(res, 400, "Invalid appointment ID format");
    }

    const appointment = await Appointment.findById(id).populate(
      "doctor",
      "name specialization hospital"
    );

    if (!appointment) {
      return sendError(res, 404, "Appointment not found");
    }

    return sendSuccess(res, 200, "Appointment fetched successfully", { appointment });
  } catch (error) {
    return sendError(res, 500, "Failed to fetch appointment", { details: error.message });
  }
};

// @route   PATCH /api/appointments/:id/status
// @desc    Update appointment status
// @access  Private/Admin
const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!isValidObjectIdFormat(id)) {
      return sendError(res, 400, "Invalid appointment ID format");
    }

    if (!VALID_STATUSES.includes(status)) {
      return sendError(res, 400, `status must be one of: ${VALID_STATUSES.join(", ")}`);
    }

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    ).populate("doctor", "name specialization hospital");

    if (!appointment) {
      return sendError(res, 404, "Appointment not found");
    }

    return sendSuccess(res, 200, "Appointment status updated successfully", { appointment });
  } catch (error) {
    return sendError(res, 500, "Failed to update appointment status", { details: error.message });
  }
};

// @route   DELETE /api/appointments/:id
// @access  Private/Admin
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectIdFormat(id)) {
      return sendError(res, 400, "Invalid appointment ID format");
    }

    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      return sendError(res, 404, "Appointment not found");
    }

    return sendSuccess(res, 200, "Appointment deleted successfully", { appointment });
  } catch (error) {
    return sendError(res, 500, "Failed to delete appointment", { details: error.message });
  }
};

module.exports = {
  bookAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment,
};
