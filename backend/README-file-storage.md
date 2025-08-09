# Healthcare Backend - File Storage Version

This is a **storage-efficient** version of the healthcare backend that uses JSON files instead of MongoDB. Perfect for development and testing when you don't want to install MongoDB locally.

## ✅ **Why Use File Storage?**

- **No MongoDB Installation Required** - Saves disk space
- **Zero Configuration** - Works immediately
- **Perfect for Development** - Quick testing and prototyping
- **Portable** - All data stored in simple JSON files

## 🚀 **Quick Start**

1. **Start the File-Based Backend:**
   ```bash
   cd backend
   npm run start:file
   ```

2. **Server will run on:** http://localhost:5001

3. **Data Storage:** All appointments saved to `backend/appointments.json`

## 📡 **API Endpoints (Same as MongoDB version)**

### POST /appointments
Save a new appointment to JSON file.

### GET /appointments  
Get all appointments from JSON file.

### DELETE /appointments/:id
Delete an appointment by ID.

## 💾 **How It Works**

- **Data Storage:** JSON file (`appointments.json`)
- **Auto-Creation:** File created automatically if it doesn't exist
- **Structure:** Array of appointment objects
- **IDs:** Simple timestamp-based ID generation
- **Sorting:** Newest appointments first

## 📁 **Data Structure**

```json
[
  {
    "id": "1704963600000",
    "fullName": "John Doe",
    "phoneNumber": "+1234567890",
    "department": "Cardiology",
    "date": "2024-01-15",
    "time": "10:00 AM",
    "createdAt": "2024-01-11T10:30:00.000Z"
  }
]
```

## 🔄 **Switching Between Versions**

### Use File Storage (No MongoDB)
```bash
npm run start:file    # Production
npm run dev:file      # Development with auto-restart
```

### Use MongoDB Version
```bash
npm start             # Production
npm run dev           # Development with auto-restart
```

## 🎯 **Perfect For:**

- **Development & Testing**
- **Prototyping**
- **Low-storage environments**
- **Quick demos**
- **Learning purposes**

## ⚠️ **Limitations**

- **Single Server Instance** - No concurrent access protection
- **No Advanced Queries** - Simple array operations only
- **File Size** - Can grow large with many appointments
- **No Relationships** - Flat data structure

## 🚀 **Production Recommendations**

For production applications, consider upgrading to:
- **MongoDB Atlas** (free cloud database)
- **PostgreSQL** with proper ORM
- **Any cloud database service**

---

**File storage version is perfect for getting started quickly without any setup!** 🎉