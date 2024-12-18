// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const profileCreationRoutes = require('./routes/profileCreationRoutes');
const recommendationsRoutes = require('./routes/recommendationsRoutes');
// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const dbURI = 'mongodb://localhost:27017/skinanlyze'; // Local MongoDB URI or MongoDB Atlas URI
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api', profileCreationRoutes);
app.use('/api',recommendationsRoutes)
// Health Check Endpoint
app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to the Skincare API!',
      status: 'Running',
    });
  });
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
