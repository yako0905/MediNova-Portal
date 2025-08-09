const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/healthcare?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB successfully');
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
});

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Healthcare Backend API is running!' });
});

// POST /appointments - Save appointment data
app.post('/appointments', async (req, res) => {
  try {
    const { fullName, phoneNumber, department, date, time } = req.body;

    // Validation
    if (!fullName || !phoneNumber || !department || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Create new appointment
    const appointment = new Appointment({
      fullName,
      phoneNumber,
      department,
      date,
      time
    });

    // Save to database
    const savedAppointment = await appointment.save();

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully!',
      data: savedAppointment
    });

  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// GET /appointments - Get all appointments (for admin purposes)
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: appointments
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}`);
  console.log(`📝 Appointments endpoint: http://localhost:${PORT}/appointments`);
}); 