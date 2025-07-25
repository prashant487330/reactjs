// const App=()=>{

//   const display=(fm,e)=>{
//     console.log(fm)
//     console.log(e)
//     alert(e.type)
//   }
//   return(
//     <>
//      <h1>Welcome to react class</h1>
//      <button onClick={(e)=>{display("Prashant",e)}}>click here</button>
//     </>
//   )
// }
// export default App;

// const App=()=>{

//   const myval=(e)=>{
//     let mytype=e.type;
//     let mynm=e.target.name;
//     let myvalue=e.target.value;
//     alert(`type:${mytype} name:${mynm} value:${myvalue}`);
//   }
//   return(
//     <>
//     <h1>hello</h1>
//     <button name="btn1" value="12" onClick={myval}>Click Here</button>
//     </>
//   )
// }
// export default App;


const App=()=>{

  const getval=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    console.log({[name]:value})
  }
  return(
    <>
    <h1>hello</h1>
    Enter name: <input type="text" name="stunm" value="prashant" onChange={getval}/>
    </>
  )
}
export default App;

