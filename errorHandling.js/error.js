class valdiationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'typeError_custom'
        this.code = 400
    }
}

let obj = {
    name: 'abcd',
    age: 17,
    address: 'mumbai'
};

try {
       if(obj.age < 18){
         throw new valdiationError('you are below to the age')
       }
       console.log('welcome to the website');
}
catch (err) {
    console.log(err.message);
    console.log(err.code)
}

console.log('hellow world');