// routes/recommendationsRoutes.js
const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/recommendationsController');

// Define route for fetching recommendations
router.get('/recommendations', getRecommendations);

module.exports = router;
