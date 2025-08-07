# 🩺 Doctor'sAppoint+ – Full Stack Appointment Booking System

**Doctor'sAppoint+** is a full-featured appointment booking platform built with the **MERN Stack**. It supports three levels of user authentication: **Patients**, **Doctors**, and **Admins**, making it ideal for doctors, clinics, and hospitals.

---

## 🌟 Key Features

### 👤 Patient Panel
- Patient registration & login
- Book appointments with doctors
- View, manage, and cancel appointments

### 🩺 Doctor Dashboard
- Secure doctor login
- View booked appointments
- Update profile and details
- Track total earnings

### 🛠️ Admin Panel
- Full admin authentication
- Manage all appointments
- View and manage all doctor profiles

---

## 💻 Tech Stack (MERN)

| Layer         | Technology         |
|---------------|--------------------|
| Frontend      | React, Tailwind CSS |
| Backend       | Node.js, Express    |
| Database      | MongoDB             |
| Authentication| JSON Web Tokens (JWT) |
| Admin Panel   | React (admin folder) |

---

## 🔒 Authentication Flow

- JWT-based secure login
- Role-based access:
   - Patients → Book/manage appointments
   - Doctors → View profile, appointments, and earnings
   - Admin → Manage doctors and appointments

---

## 📁 Folder Structure

- Doctor'sAppoint+/
  - ├── admin/ # Admin dashboard (React)
  - ├── backend/ # Backend APIs (Node.js + Express)
  - ├── frontend/ # Patient & Doctor-facing UI (React)
  - ├── README.md

---