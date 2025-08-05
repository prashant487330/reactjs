import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const MyEdit=()=>{
    const{id}=useParams();
    const [mydata,setMydata]=useState({});
    const loadData=async()=>{
        let api=`http://localhost:3000/data/${id}`;
        const response=await axios.get(api)
        // console.log(response)
        setMydata(response.data);
    }
    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setMydata(values=>({...values,[name]:value}));
       console.log(mydata);
    }
    useEffect(()=>{
        loadData();
    },[]);
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/data/${id}`;
        const response=await axios.put(api, mydata)
        alert("Data Updated");
    }
return(
    <>
    <h1>Edit records:</h1>
    Edit Rollno: <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} />
    <br />
    Edit Name: <input type="text" name="name" value={mydata.name} onChange={handleInput}/>
    <br />
    Edit City: <input type="text" name="city" value={mydata.city} onChange={handleInput} />
    <br />
    Edit Fees: <input type="text" name="fees" value={mydata.fees} onChange={handleInput}/>
    <br />
    <button onClick={handleSubmit}>Save</button>
    </>
)
}
export default MyEdit;