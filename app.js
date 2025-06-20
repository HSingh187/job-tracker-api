// app.js
const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');

// 🩺 Health check
app.get('/', (req, res) => res.send('✅ API is up'));

app.use(express.json());
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log('🔄 Starting the server...');
  try {
    await db.authenticate();
    console.log('✅ Connected to PostgreSQL DB');
    console.log(`🚀 Server running on port ${PORT}`);
  } catch (error) {
    console.error('❌ DB connection failed:', error);
  }
});
