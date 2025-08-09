# Healthcare Backend API

Express.js backend with MongoDB integration for the healthcare website.

## Features

- **POST /appointments** - Save appointment data to MongoDB
- **GET /appointments** - Retrieve all appointments (for admin)
- **MongoDB Integration** - Using Mongoose ODM
- **CORS Enabled** - Cross-origin requests allowed
- **Input Validation** - Server-side validation for all fields

## Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the backend directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/healthcare
   NODE_ENV=development
   ```

3. **MongoDB Setup:**
   - Install MongoDB locally, or
   - Use MongoDB Atlas (cloud service)
   - Update MONGODB_URI in .env file

4. **Start Server:**
   ```bash
   npm start
   # or for development with auto-restart:
   npm run dev
   ```

## API Endpoints

### POST /appointments
Save a new appointment.

**Request Body:**
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

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "fullName": "John Doe",
      "phoneNumber": "+1234567890",
      "department": "Cardiology",
      "date": "2024-01-15",
      "time": "10:00 AM",
      "createdAt": "2024-01-10T10:30:00.000Z"
    }
  ]
}
```

## Database Schema

**Appointment Collection:**
- `fullName` (String, required)
- `phoneNumber` (String, required)
- `department` (String, required)
- `date` (String, required)
- `time` (String, required)
- `createdAt` (Date, auto-generated)

## Error Handling

- **400 Bad Request** - Missing required fields
- **500 Internal Server Error** - Database connection issues
- **Validation** - All fields are required and validated 