

function EducationalSection(){
    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", () => {
        let schoolName = document.getElementById("school-name").value;
        let degreeName = document.getElementById("Degree").value; 
        let degreeYear = document.getElementById("degreeyear").value;


        console.log(schoolName)
        console.log(degreeName)
        console.log(degreeYear)


    })
    
    







    return(
        <div className="educationalSection">
            <h2>Educational Section</h2>
            <label htmlFor="school-name">School Name: </label>
            <input type="text" id="school-name"  name="school-name" placeholder="Enter your School Name"/>
            <br />
            <label htmlFor="Degree">Degree: </label>
            <input type="text" id="Degree"  name="Degree" placeholder="Enter your Degree Name"/>
            <br />
            <label htmlFor="degreeyear">Degree Completed (Year) </label>
            <input type="date" id="degreeyear"  name="degreeyear"/>
            <br />
            <button id="submit">Submit</button>
            <button id="edit">Edit</button>
        </div>
    )
}

export default EducationalSection