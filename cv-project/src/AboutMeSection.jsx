import { useState } from "react";
import CVDisplay from "./CV";

function AboutMeSection(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleEmailChange(event){
        setEmail(event.target.value)
    }

    function handlePhoneChange(event){
        setPhone(event.target.value)
    }


    return(
        <>
       <div className="AboutMeSection">
        <h1>About Me</h1>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" value={name} onChange={handleNameChange} id="name"  name="name" placeholder="Enter your full name"/>
        <br />
        <label htmlFor="email">Enter your email: </label>
        <input type="email" value={email} onChange={handleEmailChange} id="email"  name="email" placeholder="Example:Johnsmith@gmail.com"/>
        <br />
        <label htmlFor="phone">Enter your cellphone number: </label>
        <input type="phone" value={phone} onChange={handlePhoneChange} id="phone"  name="phone" placeholder="Example:087 556 7563" minLength={10}/>
       </div>
       <CVDisplay name={name} email={email} phone={phone}/>
       </>
    )
}


export default AboutMeSection;