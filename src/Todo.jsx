import React,{useState} from "react";
import "./Todo.css";
 const Todo=()=>{
    const[State,setState]=useState(20);
    return (
         <div className= "container">
            
            <h1>{State}</h1>

           <span> <button onClick={()=>setState(State+1)}>Increment</button>
            <button onClick={()=>setState(State-2)}>Decrement</button>
            <button onClick={()=>setState(State*0)}>Reset</button></span>
               
         </div>
    );
}
 export default Todo
