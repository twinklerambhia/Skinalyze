# Skinalyze 
Skinalyze is a web-based platform that analyzes user inputs and provides tailored skincare product recommendations. It bridges the gap between personalized skincare advice and easy access to suitable products, empowering users to make informed decisions for their skincare routines.

## **Features**
1. **User Authentication**
   - Secure signup and login with JWT-based authentication.
   - Authorization using Bearer tokens.

2. **User Profiles**
   - Create profiles with skin type, concerns, and budget.
   - Each profile is associated with a specific user.

3. **Recommendations**
   - Fetch recommendations based on the user profile.
   - Recommendations are filtered using a comprehensive dataset.

4. **Storage**
   - Profiles and recommendations are stored in MongoDB for easy access and retrieval.

## **System Workflow**
1. **User Signup**
   - Users create an account with their name, email, and password.
   - A unique `userId` is embedded in the JWT token upon signup.

2. **User Login**
   - Users log in with their credentials.
   - Authenticated users receive a token for secure access.

3. **Profile Creation**
   - Users create a profile containing skin type, concerns, and budget.
   - The profile is linked to the user’s `userId`.

4. **Recommendations Generation**
   - The system fetches the user's latest profile from MongoDB.
   - Matches the data to provide relevant product recommendations.

5. **Recommendations Storage**
   - Generated recommendations are stored in MongoDB for future reference.

## **Setup and Installation**

### **Prerequisites**
- Node.js installed (version 16+).
- MongoDB installed and running locally or on a cloud platform.
- CSV file (`skinanalyze.csv`) with skincare product data.

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/twinklerambhia/Skinalyze.git
   cd skinalyze
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and include:
   ```plaintext
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the application:
   Open `http://localhost:3000` in your browser or use an API client (e.g., Postman).


## **Future Enhancements**
- Integrate with Koii for decentralized storage of user profiles and recommendations.
- Add a reward mechanism for user contributions.
- Enable multi-language support for broader accessibility.

## **Contributing**
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added a new feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


---

For questions or support, feel free to contact us at [rambhiatwinkle@gmail.com](mailto:rambhiatwinkle@gmail.com).
```

