//car has fuction scope when we redecalere it overridde the code
//instead of var we can use let or const 
var a = 10;

{
    var a = 20;
    console.log('inner side' , a)
}

console.log(a);


//using let and const
let b = 50;
const c = 1;
{
    let b = 100;
    let c = 5
    console.log('inner side with let' , b);
    console.log('inner side with const' , c)
}

console.log(b);
console.log(c);
