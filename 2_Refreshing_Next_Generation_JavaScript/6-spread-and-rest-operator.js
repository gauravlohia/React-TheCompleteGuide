// The ... operator is called spread or rest depending on where we use it

// Spread - Used to split up array elements OR object properties
// const newArray = [...oldArray, 1, 2]
// const newObject = {...oldObject, newProp: 5}

let original = [2, 4, 6, 8];
let newArray = [...original, 10, 12];
console.log(newArray);

let oldObj = {
    name: "Gaurav",
    age: 26
};
let newObj = {
    ...oldObj, // object spread only available in ES9 syntax
    dob: "17/09/1994"
};
console.log(newObj);


// Rest - Used to merge a list of function arguments into an array
function sort(...args) {
    return args.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }); // if comparator function is not define the array elements are converted to strings, then sorted according to each character's Unicode code point value.
}
console.log(sort(5, 2, 4, 3, 1, 7, 8, 56, 34, 65));