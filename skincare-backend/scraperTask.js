const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const scraperTask = async () => {
  const url = 'https://beminimalist.co'; 
  const apiKey = '76JEJFVJHPJW04DO5PYSZ74IAPZF9U2FDGGH7FDWEO6O3FSML8YIM431T0KGRALU5WAAJ3C0YC36IG76'; 

  try {
    
    const response = await axios.get(`https://app.scrapingbee.com/api/v1?api_key=${apiKey}&url=${encodeURIComponent(url)}&render=true`);
    console.log("Response HTML:", response.data);  
    const $ = cheerio.load(response.data);
    const products = [];

    $(".product-card").each((i, element) => {
      const name = $(element).find(".product-name").text().trim();
      const productType = $(element).find(".product-category").text().trim();  
      const description = $(element).find(".description").text().trim();  
      const cost = $(element).find(".price").text().trim();  
      const link = $(element).find("a").attr("href");

      if (name && link) {
        products.push({
          name,
          productType,
          description,
          cost,
          link: `https://beminimalist.co${link}`,  
        });
      } else {
        console.log('Skipping empty product:', name, link);  
      }
    });

    console.log("Scraped Products:", products);  
    return products;
  } catch (error) {
    console.error("Error scraping data:", error.message);
    return [];
  }
};

scraperTask().then((data) => {
  fs.writeFileSync("beminimalist_products.json", JSON.stringify(data, null, 2));
  console.log("Scraping complete! Data saved to beminimalist_products.json");
});
