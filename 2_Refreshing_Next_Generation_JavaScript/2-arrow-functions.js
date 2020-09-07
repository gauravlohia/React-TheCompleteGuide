// General Syntax
const myFunc = () => {
    console.log("From the arrow function");
};

myFunc();

// Solves issues with the this keyword
//When using this keyword inside an arrow function it will always
// keep its context and not change it surprisingly.

const printMyName = (name) => {
    console.log(name);
};

printMyName("Gaurav");

// if receiving only on parameter argument then the paranthesis can be omitted
const printMyName2 = name => {
    console.log(name);
};

printMyName2("Gappu");

// for no arguments or more than one argument the paranthesis have to be include in the function declaration
const printMyName3 = (name, age) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
};

printMyName3("GauravLohia", 26);

// arrow functions can also return something
const multiply = number => {
    return number * 5;
};
console.log(multiply(4));

// if the function body has only the return statement then the curly parenthesis along with the return keyword can also be omitted
const multiply2 = number => number * 6;
console.log(multiply2(6));

// IIFE for arrow functions
((name, age) => {
    console.log(`IIFE Name: ${name}`);
    console.log(`IIFE Age: ${age}`);
})("Gaurav", 26);