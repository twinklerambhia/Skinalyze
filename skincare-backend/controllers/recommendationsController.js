const Profile = require('../models/Profile');
const Recommendation = require('../models/Recommendation');
const csvParser = require('csv-parser');
const fs = require('fs');

let cachedProducts = [];

const loadCsvData = () => {
  return new Promise((resolve, reject) => {
    if (cachedProducts.length > 0) {
      return resolve(cachedProducts); 
    }
    const products = [];
    fs.createReadStream('skincareProductsData.csv')
      .pipe(csvParser())
      .on('data', (row) => {
        products.push(row);
      })
      .on('end', () => {
        cachedProducts = products; 
        resolve(products);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};


const recommendProducts = (profile, products) => {
  return products.filter(product => {
    
    const parseField = field =>
      
      field
      ? field
          .replace(/(^"|"$)/g, '') // Remove leading/trailing quotes from the entire string
          .split(/,\s*/) // Split on commas, ignoring surrounding whitespace
          .map(s => s.replace(/^"|"$/g, '').trim().toLowerCase()) // Remove quotes from individual elements and trim whitespace
      : [];
    
    const skinTypes = parseField(product.skinTypee);
   
    const skinConcerns = parseField(product.skinConcern);
    
    const productTypes = parseField(product.productType);

    
    const profileSkinType = profile.skinType ? profile.skinType.toLowerCase() : '';
    const profileSkinConcern = profile.skinConcerns ? profile.skinConcerns.toLowerCase() : '';
    const profileProductType = profile.productType ? profile.productType.toLowerCase() : '';
    
    const skinTypeMatch = skinTypes.includes(profileSkinType);
    const skinConcernMatch = skinConcerns.includes(profileSkinConcern);
    const productTypeMatch = profileProductType === "all" || productTypes.includes(profileProductType);

    if (profileProductType === "all") {
      return skinTypeMatch && skinConcernMatch;
    } else {
      return skinTypeMatch && skinConcernMatch && productTypeMatch;}
  });
};


const getRecommendations = async (req, res) => {
  try {
    
    const profile = await Profile.findOne().sort({ updatedAt: -1 }).limit(1);

    if (!profile) {
      return res.status(404).json({ error: 'No profile found.' });
    }

    const products = await loadCsvData();

    const recommendations = recommendProducts(profile, products);

    const newRecommendation = new Recommendation({
      profile: profile._id, 
      recommendations: recommendations,
    });

    await newRecommendation.save(); 

    res.json({
      recommendations,
      message: 'Recommendations saved successfully!',
    });
  } catch (err) {
    console.error('Error fetching recommendations:', err);
    res.status(500).json({ error: 'An error occurred while fetching recommendations.' });
  }
};

module.exports = {
  getRecommendations
};
