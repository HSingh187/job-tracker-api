// server.js
const app = require('./app');
const db = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

async function startServer() {
  console.log('🔄 Starting the server...');
  try {
    await db.authenticate();
    console.log('✅ Connected to PostgreSQL DB');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ DB connection failed:', error);
  }
}

startServer();
