// controllers/authController.js
// Purpose: Handles user registration and login.
// Why it exists: Keeps authentication business logic out of route files.
// How it works: register() hashes the password with bcryptjs before saving;
// login() compares the submitted password against the hashed one. Both
// return a signed JWT so the frontend can store it and send it on future
// requests via the Authorization header.

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { sendSuccess, sendError } = require("../utils/responseHandler");
const { isValidEmail, isNonEmptyString } = require("../utils/validators");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    if (
      !isNonEmptyString(name) ||
      !isValidEmail(email) ||
      !isNonEmptyString(password) ||
      !isNonEmptyString(phone)
    ) {
      return sendError(res, 400, "Please provide valid name, email, password and phone");
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return sendError(res, 400, "A user with this email already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role: role === "admin" ? "admin" : "patient",
    });

    const token = generateToken(user._id);

    return sendSuccess(res, 201, "User registered successfully", {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    return sendError(res, 500, "Failed to register user", { details: error.message });
  }
};

// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isValidEmail(email) || !isNonEmptyString(password)) {
      return sendError(res, 400, "Please provide a valid email and password");
    }

    // password field has select:false in schema, so explicitly request it
    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user) {
      return sendError(res, 401, "Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendError(res, 401, "Invalid email or password");
    }

    const token = generateToken(user._id);

    return sendSuccess(res, 200, "Login successful", {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    return sendError(res, 500, "Failed to log in", { details: error.message });
  }
};

// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    // req.user is set by the protect middleware
    return sendSuccess(res, 200, "Current user fetched", { user: req.user });
  } catch (error) {
    return sendError(res, 500, "Failed to fetch current user", { details: error.message });
  }
};

module.exports = { register, login, getMe };
