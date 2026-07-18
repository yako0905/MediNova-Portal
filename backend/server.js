// server.js
// Purpose: Application entry point. Kept intentionally minimal — it only
// loads env vars, creates the Express app, wires up middleware/routes,
// connects to the database, and starts listening.

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
const allowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database
connectDB();

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Healthcare Portal API is running",
    data: {},
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/contact", contactRoutes);

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    error: {},
  });
});

// Global error handler (catches anything unexpectedly thrown)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: { details: err.message },
  });
});

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, () => {
 console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});