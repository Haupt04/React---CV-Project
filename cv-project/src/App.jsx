import {useState} from 'react';
import './App.css'
import DisplaySection from './components/DisplaySection';
import EducationalSection from './components/EducationSection';
import AboutMeSection from './components/AboutMeSection';
import WorkExp from './components/WorkExpSection'


function App() {
  const [formData, setFormData] = useState({
    schoolName: "",
    degreeName: "",
    degreeYear: "",
  });

  const [aboutMeData, setAboutMeData] = useState({
      name:"",
      email:"",
      phone:"",
  });

  const [aboutWorkExp, setWorkExp] = useState({
      companyName: "",
      position: "",
      startingDate: "",
      endingDate: "",
      responsibilities:"",
  })

  const handleWorkExpData = (data) => {
    setWorkExp(data)
  }

  const handleAboutMeDate = (data) => {
    setAboutMeData(data);
  }

  const handleDataSubmit = (data) => {
    setFormData(data); // Update formData with the submitted data
  };

  return (
    <div className="container">
  <div className="left-section">
    <AboutMeSection onClickedData={handleAboutMeDate} />
    <EducationalSection onSubmit={handleDataSubmit} />
    <WorkExp workSubmit={handleWorkExpData} />
  </div>
  
  <div className="right-section">
    <DisplaySection formData={formData} aboutMeData={aboutMeData} aboutWorkExp={aboutWorkExp} />
  </div>
</div>
  );
}

export default App;