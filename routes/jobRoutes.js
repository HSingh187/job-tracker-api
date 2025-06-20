const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/', jobController.createJob);       // POST /api/jobs
router.get('/', jobController.getAllJobs);       // GET /api/jobs
router.put('/:id', jobController.updateJob);     // PUT /api/jobs/:id
router.delete('/:id', jobController.deleteJob);  // DELETE /api/jobs/:id

module.exports = router;
