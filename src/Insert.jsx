import { useState } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

const Insert=()=>{
  const [input,setInput]=useState({})
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input);
  }
  const handleSubmit=async()=>{
    let api="http://localhost:3000/data"
    const response=await axios.post(api,input);
    console.log(response);
    toast("data saved successfully");
  }

  return(
    <>
    <h1>Insert Page</h1>
    Enter Roll No: <input type="text" name="rollno" onChange={handleInput} />
    <br /><br />
    Enter Name: <input type="text" name="name" onChange={handleInput} />
    <br /><br />
    Enter City: <input type="text" name="city" onChange={handleInput} />
    <br /><br />
    Enter Fees: <input type="text" name="fees" onChange={handleInput} />
    <br /><br />
    <button onClick={handleSubmit}>Submit</button>
    <ToastContainer/>
    </>
  )
}
export default Insert;