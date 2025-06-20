# 🧠 Job Tracker API

This project is a simple job application tracker built with Node.js, Express, and PostgreSQL.

## 🚀 How to Run

1. Clone the repo  
2. Run `npm install`  
3. Set `.env` with PostgreSQL URL  
4. Create table using SQL  
5. Run server: `npm run dev`

## 🔌 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | /api/jobs        | Get all jobs            |
| POST   | /api/jobs        | Add a job               |
| PUT    | /api/jobs/:id    | Update a job            |
| DELETE | /api/jobs/:id    | Delete a job            |

## 💾 Sample POST Body
```json
{
  "position": "DevOps Engineer",
  "company": "Amazon",
  "status": "Offer",
  "applied_date": "2025-06-20"
}

📦 Postman Collection included: `Postman_collection.json` (in root folder)
