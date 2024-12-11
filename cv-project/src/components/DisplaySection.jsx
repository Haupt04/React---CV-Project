import '../styles/styleDisplay.css'

function DisplaySection({ formData, aboutMeData, aboutWorkExp }) {
  const { schoolName, degreeName, degreeYear } = formData || {};
  const { name, email, phone } = aboutMeData || {};
  const { companyName,position,startingDate,endingDate,responsibilities} = aboutWorkExp || {};
  return (
    <div className="displaySection">
  <h2>About Me Details</h2>
  <div className="details-row">
    <strong>Name:</strong>
    <span>{name || "Not provided"}</span>
  </div>
  <div className="details-row">
    <strong>Email:</strong>
    <span>{email || "Not provided"}</span>
  </div>
  <div className="details-row">
    <strong>Phone:</strong>
    <span>{phone || "Not provided"}</span>
  </div>

  <h2>Educational Details</h2>
  <div className="details-row">
    <strong>School Name:</strong>
    <span>{schoolName || "Not provided"}</span>
  </div>
  <div className="details-row">
    <strong>Degree:</strong>
    <span>{degreeName || "Not provided"}</span>
  </div>
  <div className="details-row">
    <strong>Degree Completed (Year):</strong>
    <span>{degreeYear || "Not provided"}</span>
  </div>

  <h2>Work Experience</h2>
  <div className="details-row">
    <strong>Company Name:</strong>
    <span>{companyName || "Not provided"}</span>
  </div>
  <div className="details-row">
    <strong>Position:</strong>
    <span>{position || "Not provided"}</span>
  </div>
  <div className="details-row">
    <strong>Start Date:</strong>
    <span>{startingDate || "Not provided"}</span>
  </div>
  <div className="details-row">
    <strong>End Date:</strong>
    <span>{endingDate || "Not provided"}</span>
  </div>
  <div className="details-row">
    <strong>Responsibilities:</strong>
    <span>{responsibilities || "Not provided"}</span>
  </div>
</div>

  );
}

export default DisplaySection;
