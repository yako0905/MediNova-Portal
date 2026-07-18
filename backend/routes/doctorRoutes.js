// routes/doctorRoutes.js
// Purpose: Maps HTTP endpoints under /api/doctors to doctorController functions.
// Note: GET routes are public so the frontend can display doctors without
// login. Create/Update/Delete are restricted to admins.

const express = require("express");
const router = express.Router();
const {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", getAllDoctors);
router.get("/:id", getDoctorById);
router.post("/", protect, authorize("admin"), createDoctor);
router.put("/:id", protect, authorize("admin"), updateDoctor);
router.delete("/:id", protect, authorize("admin"), deleteDoctor);

module.exports = router;
