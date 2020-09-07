const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((elem) => {
    return elem * 2;
}); // creates a new array, without affecting the original array

console.log(numbers);
console.log(doubleNumArray);