const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile', 
    required: true,
  },
  recommendations: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;
