// models/Appointment.js
// Purpose: Defines the schema for appointments booked by patients.
// Why it exists: This is the core booking record linking a patient to a
// doctor/department at a specific date and time.
// How it works: "doctor" is a reference (ObjectId) to the Doctor collection
// so we can populate full doctor details when needed, while still keeping
// department/doctor name flexible for walk-in style bookings.

const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, "Patient name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: [true, "Doctor is required"],
    },
    appointmentDate: {
      type: Date,
      required: [true, "Appointment date is required"],
    },
    appointmentTime: {
      type: String,
      required: [true, "Appointment time is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: { createdAt: "bookedAt", updatedAt: true } }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
