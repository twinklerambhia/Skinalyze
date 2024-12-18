
import React ,{useState}from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "../styles/profileCreation.css";
import axios from "axios";
const ProfileCreation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    skinType: "",
    skinConcerns: "",
    ageRange:"",
    skincareGoals:"",
    productType:"",
    routineLevel:"",
    allergies: "",
    budget: "",
    preferredIngredients: "",
    avoidedIngredients: "",
    additionalComments: "",
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2>Skin Type & Concerns</h2>
            <div>
              <label>Skin Type:</label>
              <select
                value={formData.skinType}
                onChange={(e) => handleInputChange("skinType", e.target.value)}
              >
                <option value="">Select</option>
                <option value="Dry">Dry</option>
                <option value="Oily">Oily</option>
                <option value="Combination">Combination</option>
                <option value="Normal">Normal</option>
              </select>
            </div>
            <div>
              <label>Skin Concerns:</label>
              <select
               
               value={formData.skinConcerns}
               onChange={(e) =>
                 handleInputChange("skinConcerns", e.target.value)
               }
              >
                <option value="">Select</option>
                <option value="Blemishes">Blemishes</option>
                <option value="Acne">Acne</option>
                <option value="Dark Spots">Dark Spots</option>
                <option value="Whitehead/Blackhead">Blackheads / Whiteheads</option>
                <option value="Broken barrier">Broken barrier</option>
                <option value="Sun protection">Sun Protection</option>
                <option value="Pimples">Pimples</option>
                <option value="Pores">Pores</option>
                <option value="Irritation">Irritation</option>
                <option value="Hydration">Hydration</option>

                <option value="Skin soothing">Skin soothing</option>
             

              </select>
            </div>
            <div>
              <label>Age Range:</label>
                <select value={formData.ageRange} onChange={(e) => handleInputChange("ageRange", e.target.value)}>
                  <option value="">Select</option>
                  <option value="Under 18">Under 18</option>
                  <option value="18-25">18-25</option>
                  <option value="26-40">26-40</option>
                  <option value="40+">40+</option>
                </select>

            </div>
            <div>
            <label>Skincare Goals:</label>
                <input
                  type="text"
                  placeholder="E.g., Anti-aging, Brightening"
                  value={formData.skincareGoals}
                  onChange={(e) => handleInputChange("skincareGoals", e.target.value)}
                />

            </div>
            <div>
            <label>Preferred Product Type:</label>
              <select value={formData.productType} onChange={(e) => handleInputChange("productType", e.target.value)}>
                  <option value="">Select</option>
                  <option value="Serum">Serums</option>
                  <option value="Cleanser">Cleansers</option>
                  <option value="Exfoliator">Exfoliants</option>
                  <option value="Toner">Toners</option>
                  <option value="Sunscreen">Sunscreens</option>
                  <option value="Face mask">Face mask</option>
                  <option value="Face wash">Face wash</option>
                  <option value="Cream">Cream</option>
                  <option value="Lotion">Lotion</option>
                  <option value="Face scrub">Face scrub</option>
                  <option value="Moisturizer">Moisturizers</option>
                  <option value="Mist">Mist</option>
                  <option value="Oil">Oil</option>
                  <option value="All">All</option>

              </select>

            </div>
            <div>
            <label>Current Skincare Routine:</label>
              <select value={formData.routineLevel} onChange={(e) => handleInputChange("routineLevel", e.target.value)}>
                <option value="">Select</option>
                <option value="Basic (Cleanser, Moisturizer)">Basic</option>
                <option value="Intermediate (Includes Serums, Sunscreen)">Intermediate</option>
                <option value="Advanced (Includes Toners, Masks, etc.)">Advanced</option>
              </select>

            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h2>Preferences & Allergies</h2>
            <div>
              <label>Known Allergies or Sensitivities:</label>
              <input
                type="text"
                placeholder="E.g., Parabens, Fragrances"
                value={formData.allergies}
                onChange={(e) => handleInputChange("allergies", e.target.value)}
              />
            </div>
            <div>
              <label>Budget (INR):</label>
              <input
                type="number"
                placeholder="Enter your budget"
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
              />
            </div>
            <div>
              <label>Preferred Ingredients:</label>
              <input
                type="text"
                placeholder="E.g., Aloe Vera, Vitamin C"
                value={formData.preferredIngredients}
                onChange={(e) =>
                  handleInputChange("preferredIngredients", e.target.value)
                }
              />
            </div>
            <div>
              <label>Avoided Ingredients:</label>
              <input
                type="text"
                placeholder="E.g., Sulfates, Parabens"
                value={formData.avoidedIngredients}
                onChange={(e) =>
                  handleInputChange("avoidedIngredients", e.target.value)
                }
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h2>Additional Comments</h2>
            <div>
              <textarea
                placeholder="Enter any specific notes or requirements"
                value={formData.additionalComments}
                onChange={(e) =>
                  handleInputChange("additionalComments", e.target.value)
                }
              ></textarea>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/submitProfile", formData);
      console.log("Profile saved:", response.data);
      alert("Profile created successfully!");
    } catch (error) {
      console.error("Error submitting profile:", error);
      alert("Failed to create profile");
    }
    setLoading(false);
  };
  return (
    <div className="profile-creation">
      <ProgressBar
        percent={(step / 3) * 100}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>1</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>2</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>3</div>
          )}
        </Step>
      </ProgressBar>
      <div className="form-content">{renderStepContent()}</div>
      <div className="form-navigation">
        {step > 1 && <button onClick={handleBack}>Back</button>}
        {step < 3 && <button onClick={handleNext}>Next</button>}
        {step === 3 && <button onClick={handleSubmit} disabled={loading}>{loading?"submitting...":"Submit"}</button>}
      </div>
    </div>
  );
};

export default ProfileCreation;