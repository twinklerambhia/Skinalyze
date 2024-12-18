
const Profile = require('../models/Profile');
const createProfile = async (req, res) => {
  try {
    const newProfile = new Profile({
      skinType: req.body.skinType,
      skinConcerns: req.body.skinConcerns,
      ageRange: req.body.ageRange,
      skincareGoals: req.body.skincareGoals,
      productType: req.body.productType,
      routineLevel: req.body.routineLevel,
      allergies: req.body.allergies,
      budget: req.body.budget,
      preferredIngredients: req.body.preferredIngredients,
      avoidedIngredients: req.body.avoidedIngredients,
      additionalComments: req.body.additionalComments
    });

    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(500).json({ message: 'Error saving profile data', error });
  }
};

module.exports = { createProfile };
