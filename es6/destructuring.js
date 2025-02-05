// let arr = [10 , {
//     name : 'deepak',
//     age :23
// }]

// let [first , {name , age}] = arr;
// console.log(age);
// console.log(name);

// function checkString(...string){
//   console.log(string)
// }

// checkString("hello my name i deepak" , 'hi');


let arr1 = [1, 2, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let newArr = [...arr1, ...arr2];

console.log(newArr);


console.log({...arr1})