import React, { Component } from "react";
import classes from "./App.css";
import PersonList from "../components/PersonList/PersonList";
import Cockpit from "../components/Cockpit/Cockpit";

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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <PersonList 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    

    return (
      <div className={classes.App}>
        <Cockpit 
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
