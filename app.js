// app.js
const express = require('express');
const app = express();
require('dotenv').config();

const jobRoutes = require('./routes/jobRoutes');

// 🩺 Health check
app.get('/', (req, res) => res.send('✅ API is up'));

app.use(express.json());
app.use('/api/jobs', jobRoutes);

module.exports = app;
