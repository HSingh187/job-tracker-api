// ✅ Load environment variables from .env.test
require('dotenv').config({ path: '.env.test' });

// ✅ Import Sequelize instance
const sequelize = require('./config/db');

// ✅ Load all models before syncing
require('./models/JobApplication'); // Add other models here if needed

// ✅ Sync DB before all tests
beforeAll(async () => {
  try {
    await sequelize.sync({ force: true }); // Drops & recreates tables
    console.log('✅ Test DB synced');
  } catch (error) {
    console.error('❌ Error syncing test DB:', error);
  }
});

// ✅ Close DB connection after all tests
afterAll(async () => {
  await sequelize.close();
});
