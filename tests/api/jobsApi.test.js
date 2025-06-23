const request = require('supertest');
const app = require('../../app');

describe('Job API Endpoints', () => {
  let jobId;

  // ✅ POST Test
  it('POST /api/jobs - should create a new job', async () => {
    const res = await request(app).post('/api/jobs').send({
      company_name: 'TestCorp',
      job_title: 'Backend Intern',
      applied_date: '2025-06-22',
      status: 'applied'
    });

    console.log('POST response:', res.body);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    jobId = res.body.id;
  });

  // ✅ GET Test
  it('GET /api/jobs - should return all jobs', async () => {
    const res = await request(app).get('/api/jobs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // ✅ PUT Test
  it('PUT /api/jobs/:id - should update a job', async () => {
    const res = await request(app).put(`/api/jobs/${jobId}`).send({
      appliedDate: '2025-06-23'
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('updated');
  });

  // ✅ DELETE Test
  it('DELETE /api/jobs/:id - should delete a job', async () => {
    const res = await request(app).delete(`/api/jobs/${jobId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Job deleted');
  });

  // ✅ Delete again: should return 404
  it('DELETE /api/jobs/:id - deleting non-existing job returns 404', async () => {
    const res = await request(app).delete(`/api/jobs/${jobId}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error', 'Job not found');
  });
});
