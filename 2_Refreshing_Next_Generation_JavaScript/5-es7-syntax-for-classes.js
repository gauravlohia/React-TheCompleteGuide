// ES6 syntax
// class Human { // base class
//     constructor() {
//         this.gender = "Female";
//     }

//     printGender() {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     constructor() { // executed when we instantiate a class
//         super(); // have to call this method to access the derived class' methods and properties
//         this.name = "Gaurav"; // adding properties to the class
//         this.gender = "Male";
//     }

//     printMyName() { // methods are added just by giving it a name followed by pair of paranthesis
//         console.log(this.name);
//     }
// }

// ES7 syntax
class Human {
    gender = "Female"; // constructor omitted and properties defined directly

    printGender = () => { // assign arrow functions to method names
        console.log(this.gender);
    }
}

class Person extends Human {
    name = "Gaurav";
    gender = "Male";
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();