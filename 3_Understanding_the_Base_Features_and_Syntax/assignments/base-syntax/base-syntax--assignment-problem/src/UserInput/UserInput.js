import React from "react";

const userInput = (props) => {
  return (
    <div>
      <input 
      style={props.style} 
      type="text" 
      onChange={props.changeFunc} 
      value={props.initialVal}/>
    </div>
  );
};

export default userInput;
