// routes/appointmentRoutes.js
// Purpose: Maps HTTP endpoints under /api/appointments to appointmentController.
// Note: Booking is public (patients don't need an account to book). Viewing
// all appointments, updating status, and deleting are admin-only.

const express = require("express");
const router = express.Router();
const {
  bookAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment,
} = require("../controllers/appointmentController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/", bookAppointment);
router.get("/", protect, authorize("admin"), getAllAppointments);
router.get("/:id", protect, getAppointmentById);
router.patch("/:id/status", protect, authorize("admin"), updateAppointmentStatus);
router.delete("/:id", protect, authorize("admin"), deleteAppointment);

module.exports = router;
