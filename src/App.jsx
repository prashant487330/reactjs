import { useEffect, useState } from "react";

const App=()=>{
  const[count,setCount]=useState(0);
  // const decrement=()=>{
  //   if(count<=1){
  //     alert("Decrement is not possible")
  //   }
  //   else{
  //     setCount(count-1)
  //   }
  // }


  //  useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount(count+1)
  //   },5000);
  //  })


  //    useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount(count+1)
  //   },5000);
  //  },[])

  const[multi,setMulti]=useState(0);
  useEffect(()=>{
    setMulti(count*2)
  },[count])

  return(
    // <>
    // <h1>Counter</h1>
    // <br />
    // <h1>{count}</h1>
    // <button onClick={()=>{setCount(count+1)}}>Increment</button>
    // <button onClick={decrement}>Decrement</button>
    // </>
    <>
    <h1>My Count :{count}</h1>
    <h2>Multiplication:{multi}</h2>

    <button onClick={()=>{setCount(count+1)}}>Click here</button>
    </>
  )
}
export default App;