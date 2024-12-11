import React, { useState } from "react";
import '../styles/stylesEducation.css'

function EducationalSection({ onSubmit }) {
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleSubmit = () => {
    const schoolName = document.getElementById("school-name").value;
    const degreeName = document.getElementById("Degree").value;
    const degreeYear = document.getElementById("degreeyear").value;

    // Pass the form data to the parent component
    onSubmit({
      schoolName,
      degreeName,
      degreeYear,
    });
  };

  return (
    <div className="educationalSection">
  <h2>Educational Section</h2>
  <div className="form-row">
    <label htmlFor="school-name">School Name:</label>
    <input
      type="text"
      id="school-name"
      name="school-name"
      placeholder="Enter your School Name"
      disabled={!isEditable}
    />
  </div>
  <div className="form-row">
    <label htmlFor="Degree">Degree:</label>
    <input
      type="text"
      id="Degree"
      name="Degree"
      placeholder="Enter your Degree Name"
      disabled={!isEditable}
    />
  </div>
  <div className="form-row">
    <label htmlFor="degreeyear">Degree Completed (Year):</label>
    <input
      type="date"
      id="degreeyear"
      name="degreeyear"
      disabled={!isEditable}
    />
  </div>
  <div className="button-row">
    <button id="submit" onClick={handleSubmit}>
      Submit
    </button>
    <button id="edit" onClick={handleEdit}>
      {isEditable ? "Save" : "Edit"}
    </button>
  </div>
</div>

  );
}

export default EducationalSection;
