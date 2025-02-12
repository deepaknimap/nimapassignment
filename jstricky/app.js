console.log(0.1*3==0.3);
for(let i=0; i<=10; i++) { setTimeout(()=>{ console.log(i); },1000) }

function outer(){ 
    var b = 2 ;
    function inner(){ 
        b++; 
        console.log(b) 
        var b = 3;
} 
inner(); 
} 
outer();


(function () { 
    try { 
        throw new Error(); 
    } 
    catch (x) { 
        var x = 1, y = 2; 
        console.log(x);
     } 
     console.log(x); 
     console.log(y); 
    }
)();

console.log(true + 1);


Promise.resolve(3)
    .then((res) => { console.log(res) })
    .catch()
    .then()
    .then(res => res)
    .then()
    .catch()
    .then((res) => { console.log(res) });


console.log([2] == [2]);


console.log(test()); 
function test() 
{ 
    return true 

}

(function(){
    var a=b=3;
})()
//a will be undefined and b will be 3
console.log(typeof a);
console.log(typeof b);

function foo(){
    return 
    {
        name : 'anil'
    }
}

console.log(foo());

console.log(1+"2"+"2");

console.log(1+ +"2" + "2");


console.log(1+ +"2" + +"2");


console.log(1+ -"1"+ +"2")

console.log('a' - 'b' + 2);

var a = 10;
function b(){
    a = 20;
    return;
    // var a = function(){
       
    // }
}

b();

console.log(a);

// what will the ouput 
console.log({}=={});// false
console.log([]==[]);// fasle
console.log(10===10);//trei

//how can two object can be same 

const c = {};
const d = c;

console.log(c==d); // true

function test(){
    function foo(){
        return 20;
    }
    return foo();
    function  foo(){
        return 100;
    }
}

console.log(test())

console.log(a);
var a = 10;
console.log(a);


hello();

function hello() {
    console.log("Hello, World!");
}

hello();


{
    let x = 5;
}
console.log(x);


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}


function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter();
counter();
counter();


console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


let obj1 = { name: "Deepak" };
let obj2 = obj1;
obj2.name = "Rahul";

console.log(obj1.name);


const obj = {
    name: "Deepak",
    sayName: function() {
        console.log(this.name);
    }
};

const say = obj.sayName.bind(obj);
say();



console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});


