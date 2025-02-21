// var x = 1;
// let x;
// console.log(x)


function hoistingExample(){
    console.log('local scope' , a);
}
console.log('global scope' , a);
var a = 10;
hoistingExample();