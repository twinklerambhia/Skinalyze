
import React ,{useState}from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "../styles/profileCreation.css";

const ProfileCreation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    skinType: "",
    skinConcerns: "",
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
                <option value="Blemishes">Blemishes</option>
                <option value="Acne">Acne</option>
                <option value="Dark Spots">Dark Spots</option>
                <option value="Wrinkles">Wrinkles</option>
                <option value="None">None</option>
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
        {step === 3 && <button onClick={() => console.log(formData)}>Submit</button>}
      </div>
    </div>
  );
};

export default ProfileCreation;