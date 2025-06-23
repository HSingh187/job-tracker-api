const { Client } = require('pg');
require('dotenv').config({ path: '.env.test' });

const client = new Client({
  connectionString: process.env.TEST_DATABASE_URL
});

beforeAll(async () => {
  await client.connect();

  // ✅ Ensure table is created before inserting
  await client.query(`
    CREATE TABLE IF NOT EXISTS "JobApplications" (
      id SERIAL PRIMARY KEY,
      company_name VARCHAR(255),
      job_title VARCHAR(255),
      applied_date DATE,
      status VARCHAR(50),
      notes TEXT,
      "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
      "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
    );
  `);
});

afterAll(async () => {
  await client.end();
});

test('Insert and retrieve job', async () => {
  // ✅ Insert a record
  await client.query(`
    INSERT INTO "JobApplications"
      (company_name, job_title, applied_date, status, "createdAt", "updatedAt")
    VALUES
      ('TestCo', 'Intern', '2025-06-22', 'applied', NOW(), NOW());
  `);

  // ✅ Verify the inserted record
  const res = await client.query(`
    SELECT * FROM "JobApplications" WHERE company_name = 'TestCo'
  `);

  expect(res.rows.length).toBeGreaterThan(0);
});
