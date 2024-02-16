// import React,{useState,useEffect} from "react";

// const Counter = () =>{
//     const [count,setcount] = useState(0);

//     const increment = () =>{
//         setcount(count +1)
//     }

//     const decrement = () =>{
//         setcount(count - 1)
//     }
//     const reset = () =>{
//         setcount(0)
//     }

//     useEffect(() =>{
//        console.log("count is zero")
//     },[])


//     return(
//         <div>
//             <h1>counter</h1>
//             <h2>{count}</h2>
//             <button onClick={increment}> + </button>
//             <button onClick={decrement}> - </button>
//             <button onClick={reset}> reset </button>
//         </div>
//     );

// };

// export default Counter