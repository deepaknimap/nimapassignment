// function hello(a, b) {

//     return a + b;

// }

// console.log(hello(10, 20));

// console.log(hello(20, 20));

// console.log(hello(30, 20));

// console.log(hello(40, 20));


let a = 0;

function impure(){
  return a++;
}
console.log(impure());
console.log(impure());
console.log(impure());
console.log(impure());
console.log(impure());