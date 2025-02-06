function calculate(n, callback) {
    console.log(`your number is ${n}`);
    return callback(n);
}

const add = (n) => {
    return n * 2;
}

console.log(calculate(5, add));