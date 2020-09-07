// Destructuring allows us to easily extract array elements ot
// object properties and store them in variables
// Spread takes out all elements and puts them in a new array or object
// Destructuring allows you to pull single elements and properties an store them in variables

// ARRAY DESTRUCTURING
[a, b] = ["Hello", "Gaurav"];
console.log(a);
console.log(b);

// OBJECT DESTRUCTURING
// In array destructuring the order defines which element we take
// In object destructuring its the property name
{name} = {name: "Gaurav", age: 26};
console.log(name);
console.log(age);