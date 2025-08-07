import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const[mydata,setMydata]=useState([]);
    const navigate=useNavigate();
    const loaddata=async()=>{
        let api="http://localhost:3000/data"
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loaddata();
    },[])
    const myDel=async(id)=>{
        let api=`http://localhost:3000/data/${id}`;
        const response=await axios.delete(api);
        console.log(response);
        alert("data deleted")
        loaddata();
    }
    const Edit=(id)=>{
       navigate(`/myedit/${id}`)
    }
    const ans=mydata.map((item)=>{
        return(
            <>
            <tr>
                <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.fees}</td>
                <td>
                    <button onClick={()=>{myDel(item.id)}}>Delete</button>
                </td>
                <td>
                    <button onClick={()=>{Edit(item.id)}}>Edit</button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Welcome to Update page</h1>
        <table border="1" width="700" align="center">
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th></th>
                <th></th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Update;
