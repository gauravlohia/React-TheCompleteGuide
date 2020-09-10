import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Gaurav", age: 26 },
      { name: "Priyanka", age: 28 },
      { name: "Chitra", age: 31 }
    ],
    otherState: "some other value",
  });

  const switchNameHandler = () => {
    //console.log('Was clicked');
    // Don't do this - use setState() method instead.
    //personsState.persons[0].name = "Gappu";
    setPersonsState({
      persons: [
        { name: "Gappu", age: 26 },
        { name: "Priyanka", age: 28 },
        { name: "Chitra", age: 29 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <p>Other: {personsState.otherState}</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        func={switchNameHandler} // passing method reference between components
      >
        My Hobbies: racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // The above code compile to the JS code below
  //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'));
};

export default app;
