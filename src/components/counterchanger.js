import React ,{ useState } from "react";

const Themechange = () =>{
    const [count,setCount] = useState(0);

    const cchnage = () =>{
        setCount(count + 1)
    }
     
    const decre = () =>{
    if(count === 0){
        alert("its already zero")
    }else{
            setCount(count - 1 )
        }

    }
    
    


    return(
        <div style={{backgroundColor:count %3 === 0 ? "blue":"white"}}>
            <h1>count is{count}</h1>
            <button onClick={cchnage}> + </button>
            <button onClick={decre}> - </button>
        </div>
    )
}


export default Themechange;
