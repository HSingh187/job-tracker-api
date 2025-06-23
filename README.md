# 🧠 Job Tracker API

This project is a simple Job Application Tracker built using **Node.js**, **Express**, and **PostgreSQL**. It allows you to create, read, update, and delete job applications through a RESTful API.

---

### ✅ Features

- Add/update/delete job applications
- View all applications
- Persistent PostgreSQL storage
- Complete test coverage (unit + API + integration)
- Clean RESTful API structure


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

## ✅ Testing Summary

This project includes unit, integration, and API tests to ensure full coverage of the Job Tracker API functionality.

### 🧪 Types of Tests

| Type        | Description                                                          | File                               |
| ----------- | -------------------------------------------------------------------- | ---------------------------------- |
| Unit        | Tests pure logic functions (e.g., job validation)                    | `tests/unit/jobValidation.test.js` |
| Integration | Verifies interaction with PostgreSQL using raw SQL queries           | `tests/integration/db.test.js`     |
| API         | Tests API endpoints using Supertest and simulates real HTTP requests | `tests/api/jobsApi.test.js`        |

---

### ✅ How to Run Tests

Install dependencies:

```bash
npm install

npm run test

npm run test:coverage

📁 Environment Variables
For security reasons, .env and .env.test are not included in the repository.

To run the project, create the following files in the root directory:

✅ `.env.example`

PORT=3001
DB_HOST=localhost
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=jobtracker
DB_DIALECT=postgres


✅ `.env.test.example`

TEST_DATABASE_URL=postgres://your_user:your_pass@localhost:5432/job_tracker_test


### 📊 Test Coverage

This project maintains high test coverage through unit, integration, and API tests.

#### ✅ Terminal Coverage Output

This is the Jest terminal summary after running `npm run test:coverage`:

![Terminal Coverage](https://raw.githubusercontent.com/HSingh187/job-tracker-api/main/coverage-screenshot-terminal.png)
---

#### ✅ HTML Visual Coverage Report

This screenshot was taken from `coverage/lcov-report/index.html`:

![HTML Coverage](https://raw.githubusercontent.com/HSingh187/job-tracker-api/main/coverage-screenshot-html.png)


## 📣 Contact

For any issues or contributions, feel free to open an issue or pull request on the repository.


