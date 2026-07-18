// utils/validators.js
// Purpose: Small, dependency-free validation helpers reused across controllers.
// Why it exists: Keeps validation logic out of controllers so controllers
// stay focused on request/response flow, not regex rules.

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === "string" && emailRegex.test(email);
};

const isValidPhone = (phone) => {
  // Accepts 10-15 digit phone numbers, optionally starting with +
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return typeof phone === "string" && phoneRegex.test(phone);
};

const isNonEmptyString = (value) => {
  return typeof value === "string" && value.trim().length > 0;
};

const isValidObjectIdFormat = (id) => {
  // Mongo ObjectIds are 24 character hex strings
  return typeof id === "string" && /^[0-9a-fA-F]{24}$/.test(id);
};

module.exports = {
  isValidEmail,
  isValidPhone,
  isNonEmptyString,
  isValidObjectIdFormat,
};
