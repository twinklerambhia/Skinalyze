// models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  skinType: String,
  skinConcerns: String,
  ageRange: String,
  skincareGoals: String,
  productType: String,
  routineLevel: String,
  allergies: String,
  budget: Number,
  preferredIngredients: String,
  avoidedIngredients: String,
  additionalComments: String
},
{
    timestamps:true,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
