// utils/responseHandler.js
// Purpose: Provides two small helper functions so every controller in the
// app sends back responses in the exact same shape.
// Why it exists: Without this, every controller would hand-write
// { success, message, data } objects, leading to inconsistency and typos.
// How it works: Controllers call sendSuccess() or sendError() instead of
// res.json() directly.

const sendSuccess = (res, statusCode = 200, message = "Success", data = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const sendError = (res, statusCode = 500, message = "Something went wrong", error = {}) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};

module.exports = { sendSuccess, sendError };
