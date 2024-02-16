import React,{useState,useEffect} from "react";

function Fetching () {
    const [data,setdata] = useState([])
    
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(console.error())
    },[])
    return
    //     <div>
    //     {/* Access specific properties of the 'data' object */}
    //     <h1>User ID: {data.userId}</h1>
    //     <p>ID: {data.id}</p>
    //     <p>Title: {data.title}</p>
        
    //   </div>

    // )
}

export default Fetching;