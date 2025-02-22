// class customError {
//     constructor(message, code, name) {
//         this.message = message;
//         this.code = code;
//         this.name = name;
//     }

//     sayHello(){
//         console.log('you got an error hello from the error');
//     }
// }


// try {
//     throw new customError('you can not access a is undefined' , 401 , 'ReferenceError');
//     var a = 10;
// }
// catch (err) {
//     console.log(err.sayHello());
//     console.log(err.message);
//     console.log(err.code);
//     console.log(err.name);
// }


// function abc(){
//     console.log(abc.xyz);
// }


// abc();
// abc.xyz = 400;
// abc.xyz = 200;
// abc();


// console.log(typeof typeof 100);


// const arr = [...'pravin'];
// console.log(arr);


// console.log(isNaN('praveeen'));


// let value = parseInt('10+2')
// console.log(typeof value);
// console.log(parseInt('hello'));
// console.log(value);
// console.log(parseInt('7mf'));
// console.log(parseInt('m7m'));

'use strict'

{
    function abc(){
        console.log('hello world');
    }
}


{
 var  a = 10;
}


// console.log(a);


// abc();





let arr = [1,2,3,4,5];

console.log(arr.find((num)=> num > 3))