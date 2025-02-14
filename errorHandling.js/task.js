// IT Task: Implement Error Handling in a Function
// Task:
// Write a function that takes an array of numbers and returns the sum. If any element is not a number, it should throw an error and handle it properly.
class validationError extends Error {
    constructor(message, code, name) {
        super(message);
        this.code = code;
        this.name = name
    }
}

function sum(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('value must be an array');
    } else if (arr.length === 0) {
        throw new validationError('array should have at least an element' ,  403 , 'validationError');
    }
    else {
        return arr.reduce((first, second) => first + second)
    }
}
try {
    console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    console.log(sum([10, 20]));
    console.log(sum([]));
}
catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.code)
}

console.log('hello world');