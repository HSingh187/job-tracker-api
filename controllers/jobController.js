const JobApplication = require('../models/JobApplication');

// Create
exports.createJob = async (req, res) => {
  try {
    const job = await JobApplication.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await JobApplication.findAll();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await JobApplication.update(req.body, { where: { id } });
    res.json({ updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    await JobApplication.destroy({ where: { id } });
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
