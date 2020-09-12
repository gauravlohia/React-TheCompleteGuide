import React from "react";
import Person from './Person/Person';

const PersonList = (props) => props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        key={person.id}
        deleteHandler={() => props.clicked(index)}
        changed={(Event) => props.changed(Event, person.id)}
      />
    );
});

export default PersonList;
