// controllers/contactController.js
// Purpose: Handles contact form submissions and admin message management.
// Why it exists: Keeps "Contact Us" form logic isolated and simple.

const Contact = require("../models/Contact");
const { sendSuccess, sendError } = require("../utils/responseHandler");
const {
  isValidEmail,
  isNonEmptyString,
  isValidObjectIdFormat,
} = require("../utils/validators");

// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (
      !isNonEmptyString(name) ||
      !isValidEmail(email) ||
      !isNonEmptyString(subject) ||
      !isNonEmptyString(message)
    ) {
      return sendError(res, 400, "name, valid email, subject and message are required");
    }

    const contact = await Contact.create({ name, email, phone, subject, message });
    return sendSuccess(res, 201, "Message submitted successfully", { contact });
  } catch (error) {
    return sendError(res, 500, "Failed to submit message", { details: error.message });
  }
};

// @route   GET /api/contact
// @access  Private/Admin
const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return sendSuccess(res, 200, "Messages fetched successfully", {
      messages,
      count: messages.length,
    });
  } catch (error) {
    return sendError(res, 500, "Failed to fetch messages", { details: error.message });
  }
};

// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectIdFormat(id)) {
      return sendError(res, 400, "Invalid message ID format");
    }

    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return sendError(res, 404, "Message not found");
    }

    return sendSuccess(res, 200, "Message deleted successfully", { contact });
  } catch (error) {
    return sendError(res, 500, "Failed to delete message", { details: error.message });
  }
};

module.exports = { submitContactForm, getAllMessages, deleteMessage };
