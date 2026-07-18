// controllers/doctorController.js
// Purpose: Handles all doctor-related business logic: listing, fetching by
// ID, filtering by specialization, searching, creating, updating, deleting.
// Why it exists: Separates doctor data operations from route definitions.

const Doctor = require("../models/Doctor");
const { sendSuccess, sendError } = require("../utils/responseHandler");
const { isValidObjectIdFormat, isNonEmptyString } = require("../utils/validators");

// @route   GET /api/doctors
// @desc    Get all doctors, optional ?specialization= filter and ?search=
// @access  Public
const getAllDoctors = async (req, res) => {
  try {
    const { specialization, search } = req.query;
    const filter = {};

    if (specialization) {
      filter.specialization = { $regex: specialization, $options: "i" };
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { specialization: { $regex: search, $options: "i" } },
        { hospital: { $regex: search, $options: "i" } },
      ];
    }

    const doctors = await Doctor.find(filter).sort({ createdAt: -1 });
    return sendSuccess(res, 200, "Doctors fetched successfully", { doctors, count: doctors.length });
  } catch (error) {
    return sendError(res, 500, "Failed to fetch doctors", { details: error.message });
  }
};

// @route   GET /api/doctors/:id
// @access  Public
const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectIdFormat(id)) {
      return sendError(res, 400, "Invalid doctor ID format");
    }

    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return sendError(res, 404, "Doctor not found");
    }

    return sendSuccess(res, 200, "Doctor fetched successfully", { doctor });
  } catch (error) {
    return sendError(res, 500, "Failed to fetch doctor", { details: error.message });
  }
};

// @route   POST /api/doctors
// @access  Private/Admin
const createDoctor = async (req, res) => {
  try {
    const { name, specialization, qualification, experience, hospital } = req.body;

    if (
      !isNonEmptyString(name) ||
      !isNonEmptyString(specialization) ||
      !isNonEmptyString(qualification) ||
      experience === undefined ||
      !isNonEmptyString(hospital)
    ) {
      return sendError(res, 400, "name, specialization, qualification, experience and hospital are required");
    }

    const doctor = await Doctor.create(req.body);
    return sendSuccess(res, 201, "Doctor created successfully", { doctor });
  } catch (error) {
    return sendError(res, 500, "Failed to create doctor", { details: error.message });
  }
};

// @route   PUT /api/doctors/:id
// @access  Private/Admin
const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectIdFormat(id)) {
      return sendError(res, 400, "Invalid doctor ID format");
    }

    const doctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doctor) {
      return sendError(res, 404, "Doctor not found");
    }

    return sendSuccess(res, 200, "Doctor updated successfully", { doctor });
  } catch (error) {
    return sendError(res, 500, "Failed to update doctor", { details: error.message });
  }
};

// @route   DELETE /api/doctors/:id
// @access  Private/Admin
const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectIdFormat(id)) {
      return sendError(res, 400, "Invalid doctor ID format");
    }

    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) {
      return sendError(res, 404, "Doctor not found");
    }

    return sendSuccess(res, 200, "Doctor deleted successfully", { doctor });
  } catch (error) {
    return sendError(res, 500, "Failed to delete doctor", { details: error.message });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
