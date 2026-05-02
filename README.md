# Notification System

This project is a Campus Notification System built as part of the AffordMed Campus Hiring Evaluation.

It includes:
- Logging Middleware
- Backend Logic (Stage 1)
- Frontend Application (Stage 2)

---

## 🚀 Features

### 🔹 Stage 1 (Backend Logic)
- Fetch notifications from API
- Compute Top Priority Notifications
- Priority based on:
  - Placement > Result > Event
  - Recency (latest first)
- Logging middleware used across all operations

---

### 🔹 Stage 2 (Frontend)
- View all notifications
- Filter notifications by type:
  - Placement
  - Result
  - Event
- Priority Inbox:
  - View Top N notifications (10 / 15 / 20)
- Clean and minimal UI

---

## 🧠 Priority Logic

Each notification is assigned a score using:

    score = weight * 1e10 + timestamp

Where:
- Placement → 3  
- Result → 2  
- Event → 1  

---

## 📁 Project Structure


repo/
├── logging middleware/
│ └── logger.js
│
├── notification_app_be/
│ └── stage1.js
│
├── notification_app_fe/
│ └── React frontend
│
├── notification_system_design.md
├── README.md


---

## ⚙️ Tech Stack

- Frontend: React.js  
- Backend Logic: Node.js  
- Styling: CSS (inline styles)  
- Logging API: Provided Evaluation API  

---

## ▶️ How to Run

### Backend (Stage 1)


node notification_app_be/stage1.js


---

### Frontend (Stage 2)


cd notification_app_fe
npm install
npm start


---

## 📸 Screenshots

- Stage 1 Output  
- All Notifications Page  
- Priority Inbox  

---

## ⚠️ Notes

- Logging middleware is used throughout the application  
- Due to CORS restrictions, frontend API calls are handled appropriately  
- Focus is on clean logic, structure, and functionality  

---

## 🎯 Conclusion

This system demonstrates:
- Efficient priority-based notification handling  
- Clean and user-friendly interface  
- Structured and production-like implementation
