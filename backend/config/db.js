// config/db.js
// Purpose: Handles the MongoDB Atlas connection using Mongoose.
// Why it exists: Keeping DB connection logic separate from server.js keeps
// server.js small and makes the connection logic reusable/testable.

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
   console.log("✅ MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    // Exit process with failure if DB connection fails,
    // since the app cannot function without a database.
    process.exit(1);
  }
};

module.exports = connectDB;
