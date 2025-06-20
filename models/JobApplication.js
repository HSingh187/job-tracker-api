// models/JobApplication.js
const { DataTypes } = require('sequelize');
const db = require('../config/db');

const JobApplication = db.define('JobApplication', {
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('applied', 'interview', 'offer', 'rejected'),
    allowNull: false,
  },
  applied_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
module.exports = JobApplication;
