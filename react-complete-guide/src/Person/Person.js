import React from "react";
import Radium from 'radium';
import "./Person.css";

const person = (props) => {
  const style = {
    '@media (width: 500px)': {
      width: '450px',
      background: 'steelblue'
    }
  };
  return (
    <div className="Person" style={style}>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
      <button onClick={props.deleteHandler}>Delete</button>
    </div>
  );
};

export default Radium(person);
