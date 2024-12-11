import { useState } from "react";
import '../styles/styleSections.css'

function AboutMeSection({ onClickedData }) {
  const [isEditable, setIsEditable] = useState(false);

  const handleAboutMeSubmit = () => {
    const name = document.getElementById("name").value; // Corrected ID here
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (onClickedData) {
      onClickedData({
        name,
        email,
        phone,
      });
    } else {
      console.error("onClickedData is not provided");
    }
  };

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="AboutMeSection">
  <h1>About Me Section</h1>
  <div className="form-row">
    <label htmlFor="name">Enter your name:</label>
    <input
      type="text"
      disabled={!isEditable}
      id="name"
      name="name"
      placeholder="Enter your full name"
    />
  </div>
  <div className="form-row">
    <label htmlFor="email">Enter your email:</label>
    <input
      type="email"
      disabled={!isEditable}
      id="email"
      name="email"
      placeholder="Example: Johnsmith@gmail.com"
    />
  </div>
  <div className="form-row">
    <label htmlFor="phone">Enter your cellphone number:</label>
    <input
      type="tel"
      disabled={!isEditable}
      id="phone"
      name="phone"
      placeholder="Example: 087 556 7563"
      minLength={10}
    />
  </div>
  <div className="button-row">
    <button id="submit" onClick={handleAboutMeSubmit}>
      Submit
    </button>
    <button id="edit" onClick={handleEdit}>
      {isEditable ? "Save" : "Edit"}
    </button>
  </div>
</div>

  );
}

export default AboutMeSection;
