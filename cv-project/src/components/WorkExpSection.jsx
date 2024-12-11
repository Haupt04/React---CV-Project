import { useState} from 'react'
import '../styles/styleWork.css'


function WorkExp({ workSubmit }){
    const [isEditable2, setIsEditable2] = useState(false);

    const handleEdit = () => {
        setIsEditable2(!isEditable2)
    }

    const handleSubmit = () => {
        const companyName = document.getElementById("work-name").value;
        const  position = document.getElementById("Position").value;
        const startingDate = document.getElementById("staring-date").value;
        const endingDate= document.getElementById("ending-date").value;
        const responsibilities = document.getElementById("responsibilities").value;

        workSubmit({
            companyName,
            position,
            startingDate,
            endingDate,
            responsibilities
        })

    }

    return (
      <div className="workSection section-container">
      <h2>Work Experience Section</h2>
      
      <div className="form-row">
        <label htmlFor="work-name">Company Name:</label>
        <input
          type="text"
          id="work-name"
          name="work-name"
          placeholder="Enter your Company Name"
          disabled={!isEditable2}
        />
      </div>
    
      <div className="form-row">
        <label htmlFor="Position">Position:</label>
        <input
          type="text"
          id="Position"
          name="Position"
          placeholder="Enter your Position"
          disabled={!isEditable2}
        />
      </div>
    
      <div className="form-row">
        <label htmlFor="staring-date">Starting Date:</label>
        <input
          type="date"
          id="staring-date"
          name="staring-date"
          disabled={!isEditable2}
        />
      </div>
    
      <div className="form-row">
        <label htmlFor="ending-date">Ending Date:</label>
        <input
          type="date"
          id="ending-date"
          name="ending-date"
          disabled={!isEditable2}
        />
      </div>
    
      <div className="form-row">
        <label htmlFor="responsibilities">Position Responsibilities:</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          placeholder="Describe your responsibilities"
          disabled={!isEditable2}
        ></textarea>
      </div>
    
      <div className="button-row">
        <button id="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button id="edit" onClick={handleEdit}>
          {isEditable2 ? "Save" : "Edit"}
        </button>
      </div>
    </div>
    
    );
}


export default WorkExp