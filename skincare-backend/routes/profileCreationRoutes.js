// routes/profileCreationRoutes.js
const express = require('express');
const { createProfile } = require('../controllers/profileCreationController');
const router = express.Router();

// POST route to submit profile data
router.post('/submitProfile', createProfile);

module.exports = router;
