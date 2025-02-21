class customError {
    constructor(message, code, name) {
        this.message = message;
        this.code = code;
        this.name = name;
    }

    sayHello(){
        console.log('you got an error hello from the error');
    }
}


try {
    throw new customError('you can not access a is undefined' , 401 , 'ReferenceError');
    var a = 10;
}
catch (err) {
    console.log(err.sayHello());
    console.log(err.message);
    console.log(err.code);
    console.log(err.name);
}
