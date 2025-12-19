Below is a **clear, professional `README.md`** you can copy-paste.
It explains **what the project is, how it works, how to run it, and your thinking** — exactly what evaluators look for.

---

# 📌 Mini Issue Tracker

A simple full-stack **issue tracking application** inspired by tools like Jira.
Users can create, view, update, and delete issues with priority and status management.

This project focuses on **clarity of logic, clean structure, and full-stack understanding** rather than UI design.

---

## 🛠 Tech Stack

### Backend

* **Python**
* **FastAPI**
* **Pydantic** (request/response validation)
* **Uvicorn** (ASGI server)
* Data stored **in memory** (no database)

### Frontend

* **React (React 18)**
* **Fetch API** for backend communication
* Minimal UI (functionality-focused)

### Tooling

* **Git & GitHub**
* **VS Code**
* **Cursor** (AI-assisted development)

---

## ✨ Features

* View all issues
* Create a new issue
* Update issue status (Open / In-Progress / Done)
* Delete an issue
* Priority levels (Low / Medium / High)
* Basic loading and error handling

---

## 📁 Project Structure

```
mini-issue-tracker/
├── backend/
│   ├── main.py
│   ├── models.py
│   └── schemas.py
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── api.js
│       └── index.js
├── .gitignore
└── README.md
```

---

## ▶️ How to Run the Project

### 1️⃣ Backend (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

Swagger API docs:

```
http://127.0.0.1:8000/docs
```

---

### 2️⃣ Frontend (React)

```bash
cd frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint       | Description      |
| ------ | -------------- | ---------------- |
| GET    | `/issues`      | Get all issues   |
| POST   | `/issues`      | Create new issue |
| PUT    | `/issues/{id}` | Update issue     |
| DELETE | `/issues/{id}` | Delete issue     |

---

## 🧠 Design Decisions

* Used **in-memory storage** to keep the project lightweight
* Used **Pydantic schemas** for strong validation
* Used **Enums** to restrict allowed priority and status values
* Enabled **CORS** to allow frontend-backend communication
* Kept frontend simple to focus on functionality and logic

---

## 🚀 Future Improvements

* Persist data using a database
* User authentication
* Filtering and search
* Improved UI/UX
* Pagination for large issue lists

---

## 🤖 Use of Cursor

Cursor was used to:

* Speed up boilerplate generation
* Debug environment and configuration issues
* Refine code structure and clarity

All logic and decisions were reviewed and implemented manually.

---

## ✅ Evaluation Notes

This project demonstrates:

* Full-stack development understanding
* API design and validation
* Frontend–backend integration
* Debugging and environment setup skills
* Clean Git workflow and structure

---

## 📌 Author

**Your Name**
GitHub: [https://github.com/your-username](https://github.com/your-username)

---

If you want, I can:

* Review your repo before submission
* Help tailor the README to a **specific company**
* Rewrite this in a **more junior or more senior tone**
* Add screenshots section

Just tell me 👍
