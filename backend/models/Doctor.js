// models/Doctor.js
// Purpose: Defines the schema for doctors listed on the healthcare portal.
// Why it exists: The frontend needs doctor profiles to display on a
// "Find a Doctor" page and to link appointments to a specific doctor.
// How it works: availableDays is an array of strings (e.g. ["Monday","Wednesday"])
// so the frontend can render a doctor's weekly schedule.

const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Doctor name is required"],
      trim: true,
    },
    specialization: {
      type: String,
      required: [true, "Specialization is required"],
      trim: true,
    },
    qualification: {
      type: String,
      required: [true, "Qualification is required"],
      trim: true,
    },
    experience: {
      type: Number,
      required: [true, "Experience (in years) is required"],
      min: [0, "Experience cannot be negative"],
    },
    hospital: {
      type: String,
      required: [true, "Hospital/clinic name is required"],
      trim: true,
    },
    availableDays: {
      type: [String],
      default: [],
    },
    availableTime: {
      type: String,
      trim: true,
      default: "",
    },
    profileImage: {
      type: String,
      trim: true,
      default: "",
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

module.exports = mongoose.model("Doctor", doctorSchema);
