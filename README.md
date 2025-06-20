# 🧠 Job Tracker API

This project is a simple Job Application Tracker built using **Node.js**, **Express**, and **PostgreSQL**. It allows you to create, read, update, and delete job applications through a RESTful API.

---

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/job-tracker-api.git
cd job-tracker-api
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add your PostgreSQL database credentials:

```env
PORT=3001
DB_HOST=localhost
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=jobtracker
DB_DIALECT=postgres
```

### 4️⃣ Create the Database & Table

Create a PostgreSQL database named `jobtracker`.

The table will be automatically created by Sequelize when the server starts.

---

## ▶️ Start the Server

To run the server in development mode using nodemon:

```bash
npm run dev
```

Or run it normally with:

```bash
node app.js
```

---

## 🔌 API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/api/jobs`     | Get all jobs       |
| POST   | `/api/jobs`     | Add a new job      |
| PUT    | `/api/jobs/:id` | Update a job by ID |
| DELETE | `/api/jobs/:id` | Delete a job by ID |

---

## 📦 Sample POST Request

```http
POST /api/jobs
Content-Type: application/json
```

### JSON Body:

```json
{
  "company_name": "Keploy",
  "job_title": "Backend Developer",
  "status": "applied",
  "applied_date": "2025-06-20"
}
```

---

## 🧪 Database Schema (Model)

```js
JobApplication = {
  company_name: STRING (required),
  job_title: STRING (required),
  status: ENUM('applied', 'interview', 'offer', 'rejected') (required),
  applied_date: DATEONLY (required),
  notes: TEXT (optional)
}
```

---

## 🧰 Tools & Technologies Used

* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* dotenv
* Postman (for testing)

---

## 📬 Postman Collection

A sample Postman collection is provided in the repo as `Postman_collection.json`.

You can import it into Postman to test all the endpoints.

---

## 🌐 Run the Frontend Locally
Option 1: Open Directly
Just open index.html in your browser (double-click or use VS Code Live Server).

---

## 📣 Contact

For any issues or contributions, feel free to open an issue or pull request on the repository.


