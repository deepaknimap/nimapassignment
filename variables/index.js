//we can not access a before initialization
// console.log(a);
// let a = 10;
// console.log(a);

//it will give undfined because it is hoisted but not initialized
// console.log(a)
// var a;
// a = 10;
// console.log(a)

//const can not be redeclared & can not be reassigned
// const b;
// const b = 10;
// console.log(10);


// b = 10;

function variable() {

    {
        let a = 10;
        console.log(a);
        var b = 20;
    }
    //can not access let outsie the block
    // console.log(a);
    // var can be access outside the block because var has function scope
    console.log(b)
}

variable();


function varExample() {
    var x = 10;  
    if (true) {
      var x = 20; // Same variable redeclared
      console.log("Inside block:", x); // Output: 20
    }
    console.log("Outside block:", x); // Output: 20 (no block scope)
  }
  varExample();

  
  function letExample() {
    let x = 10;
    if (true) {
      let x = 20; // Block-scoped variable
      console.log("Inside block:", x); // Output: 20
    }
    console.log("Outside block:", x); // Output: 10
  }
  letExample();
  