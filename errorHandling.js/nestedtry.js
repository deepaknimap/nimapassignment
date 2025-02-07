const obj = {
    name: 'joy'
}

try {
    console.log('outer try block');
    try {
        console.log(obj.age.details);
    }
    catch (err) {
        console.log(err.message);
        throw err;
    }
}
catch (err) {
    console.log('outer catch block');
    console.log(err.message);
}

console.log('hello world');