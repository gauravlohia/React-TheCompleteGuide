import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "asdfasdz", name: "Gaurav", age: 26 },
      { id: "zxcvs", name: "Priyanka", age: 28 },
      { id: "rturyfj", name: "Chitra", age: 31 },
    ],
    otherState: "someOtherValue",
    showPersons: false,
  };

  nameChangeHandler = (Event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = Event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   outline: "none",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "green",
    //   },
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                deleteHandler={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={(Event) => this.nameChangeHandler(Event, person.id)}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>The stylesheets are now working.</p>
        {/* <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button> */}
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
