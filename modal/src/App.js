// import {Stack} from "@mui/material";
import popupStyles from "./App.module.css";
import { useState } from "react";

function App() {
  const[popup,setPopup] = useState(false);
  const [Username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const[dob,setDob]=useState('');
  console.log(popup,email,phoneNumber,dob);
  const handleClick=()=>{
      setPopup(true);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    const selectedDate=new Date(dob);
    const today=new Date();
    if(phoneNumber.length!==10){
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }else if(selectedDate>today){
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    }else{
    setUsername('');
    setPhoneNumber('');
    setDob('');
    setEmail('');
    }
  }
  return (
    <div className={`modal ${popupStyles.container}`}>
      <h1>User Details Modal</h1>
      <button onClick={handleClick} className={popupStyles.button}>Open Form</button>
      {popup === true ? (
          <div className={popupStyles.overlay} onClick={()=>setPopup(false)}>
           {/* prevent close when clicking inside form */}
          <form className={`modal-content ${popupStyles.modalContainer}`} onClick={(e)=>e.stopPropagation()}  onSubmit={handleSubmit}>
            <h1>Fill Details</h1>
            <label for="name">Username:</label>
            <input id="username" onChange={(e)=>setUsername(e.target.value)} value={Username} className={popupStyles.input} required/>
            <label for="email">Email Address:</label>
            <input id="email" onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className={popupStyles.input} required/>
            <label for="number">Phone Number:</label>
            <input id="phone" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className={popupStyles.input} required/>
            <label for="date">Date of Birth:</label>
            <input id="dob" value={dob} onChange={(e)=>setDob(e.target.value)} type="date" placeholder="dd-mm-yyyy" className={popupStyles.input} required/>
            <button className="submit-button" style={{backgroundColor:"blue",marginBottom:"10px",padding:"15px 30px 15px 30px",borderRadius:"10px",border:"none",color:"white",fontWeight:"bold"}}>Submit</button>
          </form>
          </div>
        ):null
      }
    </div>
  );
}

export default App;
