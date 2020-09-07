const number = 1; // primitive type
const num2 = number; // creates a real copy of number in num2
console.log(num2);

// All primitive types variables when assigned to another variable, a copy is created

// Objects and arrays are reference types

const person = {
    name: "Gaurav"
};

// the object is stored in memory and the person variable only stores a reference to that object

const secondPerson = person;
// secondPerson only copies the reference to the object
console.log(person);
console.log(secondPerson);

person.name = "Gappu";
console.log(person);
console.log(secondPerson); // will reflect the change made to person

// to copy the object referenced by a variable, use the spread operator
const thirdPerson = {
    ...person
};
person.name = "Gaurav";
console.log(person);
console.log(secondPerson);
console.log(thirdPerson); // will print Gappu