import { useState } from "react";
import axios from "axios";

const Search=()=>{
    const[rno,setRno]=useState("");
    const[mydata,setMydata]=useState([]);
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/data?rollno=${rno}`
        const response=await axios(api);
        console.log(response.data)
        setMydata(response.data)
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })
        return(
        <>
        <h1>Welcome to search page</h1>
        Enter Rollno: <input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}}/>
        <button onClick={handleSubmit}>Search</button>
        <hr />
        <table width="600" border="1" align="Center">
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Search;