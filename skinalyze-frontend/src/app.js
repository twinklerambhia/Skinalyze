import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProfileCreation from "./pages/profileCreation";
import RecommendationsPage from "./pages/recommendationsPage";

import LoginSignup from "./pages/createAccount";
import Layout from "./components/layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
         
          <Route path="/profile-creation" element={<ProfileCreation />} />
          <Route path="/recommendationsPage" element={<RecommendationsPage />} />
          
          <Route path="/create-account" element={<LoginSignup />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
