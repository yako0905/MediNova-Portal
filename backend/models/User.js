// models/User.js
// Purpose: Defines the schema for patients/admins who can log in to the portal.
// Why it exists: Every backend that has authentication needs a User model
// to store credentials and role information.
// How it works: Passwords are stored hashed (hashing happens in the
// controller before save, using bcryptjs). Mongoose "timestamps" auto-adds
// createdAt and updatedAt.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // never return password field by default in queries
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    role: {
      type: String,
      enum: ["patient", "admin"],
      default: "patient",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
