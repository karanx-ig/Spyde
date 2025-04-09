import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset} from "./Store";
import "./Counter.css";

const counter= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div  className= "container">
      <div><h1>Count:{count}</h1></div>
      
      <span><button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button></span>
      
    </div>
  );
};

export default counter;