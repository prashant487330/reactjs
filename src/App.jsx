// import { useState } from "react";

// const App=()=>{
//   const [name,setName]=useState("ppp");
//   const myname=()=>{
//     setName("Prashant")
//   }
//   return(
//     <>
//     <h1>Hello i am :{name}</h1>
//     <button onClick={myname}>Click</button>
      
//     </>
//   )
// }
// export default App;

import { useState } from "react";

const App=()=>{
  const [color,setColor]=useState("red");
  
  return(
    <>
    <h1 style={{color:color}}>My Favroute Color is :{color}</h1>
    <button onClick={()=>{setColor("pink")}}>Pink</button>
    <button onClick={()=>{setColor("orange")}}>Orange</button>
    <button onClick={()=>{setColor("blue")}}>Blue</button>
    <button onClick={()=>{setColor("green")}}>Green</button>
      
    </>
  )
}
export default App;