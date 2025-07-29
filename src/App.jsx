// import { useState } from "react";

// const App=()=>{
//   // const[name, setName]=useState("")
//   // const[city, setCity]=useState("")
//   // const handleSubmit=()=>{
//   //   console.log({name:name,city:city});
//   // }
//   const[empno,setEmpno]=useState("")
//   const[name,setName]=useState("")
//   const[city,setCity]=useState("")
//   const[sallery,setSallery]=useState("")
//   const handleSubmit=()=>{
//     console.log({empno:empno,name:name,city:name,sallery:sallery})
//   }
//   return(
//     // <>
//     // <h1>Application Form</h1>
//     // Enter name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//     // <br /><br />
//     // Enter city: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//     // <br />
//     // <button onClick={handleSubmit}>save</button>
//     // </>
//     <>
//     <h1>Application form</h1>
//     Enter Emp no: <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}}/>
//     <br />
//     Enter name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//     <br />
//     Enter city: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
//     <br />
//     Enter sallery: <input type="text" value={sallery} onChange={(e)=>{setSallery(e.target.value)}} />
//     <br />
//     <button onClick={handleSubmit}>Save</button>
//     </>
//   )
// }
// export default App;

import { useState } from "react";
const App=()=>{
  const [input,setInput]=useState({})
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input);
  }
  return(
    <>
    <h1>Application Form</h1>
    Enter Emp No: <input type="text" name="empno" onChange={handleInput} />
    <br />
    Enter Name: <input type="text" name="name" onChange={handleInput} />
    <br />
    Enter City: <input type="text" name="city" onChange={handleInput} />
    <br />
    Enter Sallery: <input type="text" name="sallery" onChange={handleInput} />
    <br />
    <button>Submit</button>

    </>
  )
}
export default App;