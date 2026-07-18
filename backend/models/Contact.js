// models/Contact.js
// Purpose: Defines the schema for messages submitted through the
// portal's "Contact Us" form.
// Why it exists: Lets admins view and manage inbound patient/visitor
// inquiries from one place.

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

module.exports = mongoose.model("Contact", contactSchema);
