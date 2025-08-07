import axios from "axios";
import { useEffect,useState } from "react";

const Display=()=>{
    const[mydata,setMydata]=useState([])
    const loaddata=async()=>{
        let api="http://localhost:3000/data"
        const response=await axios.get(api)
        console.log(response)
        setMydata(response.data)
    }
    useEffect(()=>{
        loaddata()
    },[])

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
        <h1>Welcome to display page</h1>
        <table border="1" align="center">
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
export default Display;