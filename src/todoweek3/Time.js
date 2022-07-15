import {useState,useEffect} from "react";
import Myimage from "./todo.png";

export function Time(){
const [Time,setTime] = useState(0);
useEffect(()=> {
    setTimeout(()=> {
        setTime(prev => prev +1) 
    } ,1000)

},[Time])

return (
  <div>
    <div>
      <img src={Myimage} alt="logo" />
    </div>
    <p>You have used {Time} Seconds on this website</p>
  </div>
);
};