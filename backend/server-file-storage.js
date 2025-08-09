const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File path for storing appointments
const appointmentsFile = path.join(__dirname, 'appointments.json');

// Initialize appointments file if it doesn't exist
if (!fs.existsSync(appointmentsFile)) {
  fs.writeFileSync(appointmentsFile, JSON.stringify([]));
}

// Helper functions
const readAppointments = () => {
  try {
    const data = fs.readFileSync(appointmentsFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeAppointments = (appointments) => {
  fs.writeFileSync(appointmentsFile, JSON.stringify(appointments, null, 2));
};

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Healthcare Backend API is running with File Storage!' });
});

// POST /appointments - Save appointment data
app.post('/appointments', (req, res) => {
  try {
    const { fullName, phoneNumber, department, date, time } = req.body;

    // Validation
    if (!fullName || !phoneNumber || !department || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Read existing appointments
    const appointments = readAppointments();

    // Create new appointment
    const newAppointment = {
      id: Date.now().toString(), // Simple ID generation
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      department: department.trim(),
      date,
      time,
      createdAt: new Date().toISOString()
    };

    // Add to appointments array
    appointments.push(newAppointment);

    // Save to file
    writeAppointments(appointments);

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully!',
      data: newAppointment
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

// GET /appointments - Get all appointments
app.get('/appointments', (req, res) => {
  try {
    const appointments = readAppointments();
    res.json({
      success: true,
      data: appointments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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

// DELETE /appointments/:id - Delete an appointment
app.delete('/appointments/:id', (req, res) => {
  try {
    const { id } = req.params;
    const appointments = readAppointments();
    
    const filteredAppointments = appointments.filter(app => app.id !== id);
    
    if (appointments.length === filteredAppointments.length) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }
    
    writeAppointments(filteredAppointments);
    
    res.json({
      success: true,
      message: 'Appointment deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting appointment:', error);
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
  console.log(`💾 Using file storage: ${appointmentsFile}`);
});