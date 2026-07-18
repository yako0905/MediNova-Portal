// middleware/authMiddleware.js
// Purpose: Protects private routes by verifying a JWT sent in the
// Authorization header, and restricts certain routes to specific roles.
// Why it exists: Centralizing auth logic here means route files stay
// declarative (just add `protect` or `authorize('admin')` to a route).
// How it works:
//   1. `protect` reads "Authorization: Bearer <token>", verifies it with
//      JWT_SECRET, loads the user (minus password) and attaches it to req.user.
//   2. `authorize(...roles)` runs after `protect` and checks req.user.role.

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { sendError } = require("../utils/responseHandler");

const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return sendError(res, 401, "Not authorized, no token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return sendError(res, 401, "Not authorized, user no longer exists");
    }

    req.user = user;
    next();
  } catch (error) {
    return sendError(res, 401, "Not authorized, token failed", {
      details: error.message,
    });
  }
};

// Usage: authorize('admin') or authorize('admin', 'patient')
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return sendError(
        res,
        403,
        `Access denied. Requires role: ${roles.join(" or ")}`
      );
    }
    next();
  };
};

module.exports = { protect, authorize };
