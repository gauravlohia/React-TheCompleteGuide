import React from "react";

const validationComponent = (props) => {
  let outputText = null;
  if (props.textLength >= 7) {
    outputText = "Text long enough.";
  } else {
    outputText = "Text too short!";
  }
  return (
    <div>
      <p>{outputText}</p>
    </div>
  );
};

export default validationComponent;
