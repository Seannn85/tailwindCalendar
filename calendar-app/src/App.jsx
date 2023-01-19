import React from "react";
import { generateDate } from "./util/calendar";

const App = () => {
  console.log(generateDate());

  const days = ["M","T","W","T","F","S","S"];
  
  return (
  
  <div className="w-96 h-96 ">

    <div className="w-full grid grid-cols-7"> 
      {days.map((day,index)=>{
      return <h1 key={index}>{day}</h1>})}
    </div>
  <div className="w-full grid grid-cols-7">


{generateDate().map(({date, currentMonth, today},index)=>{

  return <div key={index}>
    <h1>{date.date()}</h1>
  </div>
})}

</div>
  </div>
)};

export default App;
