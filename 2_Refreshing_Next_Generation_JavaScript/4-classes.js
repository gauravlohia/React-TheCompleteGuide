// a class is created with the 'class' keyword
// it can have both Properties (attributes) and Methods (functions that act on the attributes)
// classes are a convenient way of making constructor functions
// classes also support inheritance which is comparable to prototypes

class Human { // base class
    constructor() {
        this.gender = "Female";
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() { // executed when we instantiate a class
        super(); // have to call this method to access the derived class' methods and properties
        this.name = "Gaurav"; // adding properties to the class
        this.gender = "Male";
    }

    printMyName() { // methods are added just by giving it a name followed by pair of paranthesis
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();