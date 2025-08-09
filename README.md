# 🏥 Healthcare Website - MERN Stack

A complete responsive healthcare website built with **React** (frontend) and **Express.js** (backend). This project provides a modern, mobile-friendly interface for a healthcare center with appointment booking, contact forms, and comprehensive information about medical services.

## 🌟 **Live Demo**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5001

## 📸 **Screenshots**
*Add screenshots of your website here*

## ✨ **Features**
- 🏠 **Modern Homepage** with hero section and service cards
- 📋 **About Us Page** with hospital information and specialties
- 📞 **Contact Form** with validation
- 📅 **Appointment Booking** with real-time form submission
- 📱 **Fully Responsive** design for all devices
- 🔒 **Form Validation** on both frontend and backend
- 💾 **File-based Storage** (no database installation required)

## 🏗️ Project Structure

```
website/
├── src/                    # React Frontend
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   └── ...
├── backend/               # Express.js Backend
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── README.md          # Backend documentation
└── README.md              # This file
```

## 🚀 Features

### Frontend (React + Bootstrap)
- **Responsive Design** - Mobile-friendly interface
- **Navigation** - React Router with smooth navigation
- **Homepage** - Hero section with "Your Health, Our Priority"
- **About Us** - Hospital information and specialty cards
- **Contact Form** - Functional contact form
- **Appointment Booking** - Complete booking form with backend integration

### Backend (Express.js + MongoDB)
- **RESTful API** - Clean API endpoints
- **MongoDB Integration** - Mongoose ODM for data persistence
- **CORS Enabled** - Cross-origin requests allowed
- **Input Validation** - Server-side validation
- **Error Handling** - Comprehensive error responses

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### 1. Frontend Setup

```bash
# Navigate to project root
cd "C:\Users\yashika kotia\OneDrive\Desktop\yashika folder\MERN PROJECT\website"

# Install dependencies
npm install

# Start development server
npm start
```

Frontend will be available at: **http://localhost:3000**

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (if not exists)
echo "PORT=5000
MONGODB_URI=mongodb://localhost:27017/healthcare
NODE_ENV=development" > .env

# Start backend server
npm start
```

Backend will be available at: **http://localhost:5000**

### 3. MongoDB Setup

**Option A: Local MongoDB**
1. Install MongoDB Community Server
2. Start MongoDB service
3. Database will be created automatically

**Option B: MongoDB Atlas (Cloud)**
1. Create free account at mongodb.com
2. Create a cluster
3. Get connection string
4. Update MONGODB_URI in backend/.env

## 📡 API Endpoints

### POST /appointments
Save a new appointment.

**Request:**
```json
{
  "fullName": "John Doe",
  "phoneNumber": "+1234567890",
  "department": "Cardiology",
  "date": "2024-01-15",
  "time": "10:00 AM"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Appointment booked successfully!",
  "data": {
    "_id": "...",
    "fullName": "John Doe",
    "phoneNumber": "+1234567890",
    "department": "Cardiology",
    "date": "2024-01-15",
    "time": "10:00 AM",
    "createdAt": "2024-01-10T10:30:00.000Z"
  }
}
```

### GET /appointments
Get all appointments (for admin purposes).

## 🎯 Pages & Features

### Homepage (`/`)
- **Hero Section** with background image
- **Features** highlighting key benefits
- **Services Preview** with specialty cards
- **Call-to-Action** buttons

### About Us (`/about`)
- **Hospital Story** and mission
- **Specialty Cards** for different departments
- **Statistics** and achievements

### Contact Us (`/contact`)
- **Contact Form** with validation
- **Contact Information** display
- **Success Messages** on form submission

### Book Appointment (`/appointment`)
- **Complete Booking Form** with all required fields
- **Backend Integration** - saves to MongoDB
- **Real-time Validation** and error handling
- **Success Confirmation** messages

## 🎨 Design Features

- **Bootstrap 5** for responsive design
- **Font Awesome** icons throughout
- **Custom CSS** for enhanced styling
- **Mobile-first** approach
- **Clean, modern** healthcare aesthetic

## 🔧 Development

### Frontend Development
```bash
npm start          # Start development server
npm run build      # Build for production
```

### Backend Development
```bash
npm start          # Start production server
npm run dev        # Start with nodemon (auto-restart)
```

## 📱 Responsive Design

The website is fully responsive and works on:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🗄️ Database Schema

**Appointments Collection:**
- `fullName` (String, required)
- `phoneNumber` (String, required)
- `department` (String, required)
- `date` (String, required)
- `time` (String, required)
- `createdAt` (Date, auto-generated)

## 🚨 Error Handling

- **Frontend**: Form validation and user-friendly error messages
- **Backend**: Comprehensive error responses with status codes
- **Database**: Connection error handling and validation

## 🔒 Security Features

- **Input Validation** on both frontend and backend
- **CORS Configuration** for secure cross-origin requests
- **Error Sanitization** to prevent information leakage

## 📊 Performance

- **Optimized Images** from Unsplash
- **Minified CSS/JS** in production
- **Efficient Routing** with React Router
- **Database Indexing** for fast queries

## 🎯 Future Enhancements

- User authentication and admin panel
- Email notifications for appointments
- Payment integration
- Patient portal with medical records
- Real-time chat support
- Multi-language support

---

**Built with ❤️ using React, Express.js, and MongoDB** 