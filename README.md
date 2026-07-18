# 🏥 MediNova Portal

A modern full-stack healthcare appointment platform built using the **MERN Stack**. MediNova Portal enables patients to register, log in securely, browse doctors, and book appointments through a simple and responsive interface.

🌐 **Live Demo:** https://healthcare-portal-roan.vercel.app/

---

## ✨ Features

### 🔐 Authentication
- User Registration
- Secure Login with JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes

### 👨‍⚕️ Doctor Management
- View available doctors
- Dynamic doctor list from MongoDB
- Doctor specialization and details

### 📅 Appointment Booking
- Book appointments with doctors
- Store appointments securely in MongoDB
- Dynamic doctor selection
- Appointment validation

### 💻 Responsive Interface
- Modern React UI
- Mobile-friendly design
- Clean and intuitive navigation

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- JavaScript (ES6+)
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel (Frontend)

### Development Tools
- Git & GitHub
- Thunder Client / Postman
- VS Code

---

## 📂 Project Structure

```text
MediNova-Portal/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── components/
│   ├── config/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── App.js
│
├── public/
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yako0905/MediNova-Portal.git
cd MediNova-Portal
```

### 2️⃣ Install Frontend Dependencies

```bash
npm install
```

### 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

> **Note:** Never commit your `.env` file to GitHub.

---

## ▶️ Run the Project

### Start Backend

```bash
cd backend
npm start
```

### Start Frontend

```bash
npm start
```

Frontend:

```
http://localhost:3000
```

Backend:

```
http://localhost:5001
```

---

## 📸 Current Features

- ✅ User Authentication (Register/Login)
- ✅ JWT Protected APIs
- ✅ MongoDB Database Integration
- ✅ Doctor Management
- ✅ Appointment Booking
- ✅ Responsive UI
- ✅ RESTful API Architecture

---

## 🔮 Future Enhancements

- 👤 Patient Dashboard
- 📋 My Appointments
- ❌ Appointment Cancellation
- 👨‍💼 Admin Dashboard
- ✏️ Doctor Profile Management
- 🔍 Search & Filter Doctors
- 📧 Email Notifications
- 💳 Online Payment Integration
- 📄 Medical Records Management

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---
