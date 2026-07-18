// routes/contactRoutes.js
// Purpose: Maps HTTP endpoints under /api/contact to contactController functions.

const express = require("express");
const router = express.Router();
const {
  submitContactForm,
  getAllMessages,
  deleteMessage,
} = require("../controllers/contactController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/", submitContactForm);
router.get("/", protect, authorize("admin"), getAllMessages);
router.delete("/:id", protect, authorize("admin"), deleteMessage);

module.exports = router;
