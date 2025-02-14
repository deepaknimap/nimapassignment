// // try {
// //     throw new Error("Something went wrong");
// // } catch (error) {
// //     console.log("Caught:", error.message);
// //     console.log(error.name);
// // } finally {
// //     console.log("Finally executed");
// // }

// try {
//     console.log("Try block");
//     throw new Error("Error in try");
// } catch (error) {
//     console.log("Caught:", error.message);
// } finally {
//     console.log("Finally block");
//     throw new Error("Error in finally");
// }
// console.log("After finally");



// class CustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "CustomError";
//     }
// }

// try {
//     throw new CustomError("This is a custom error");
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


// console.log('A'-1);
// console.log("tilak" + "100");
// console.log("2"+2+"2");
// console.log('2'+2-'2');

// const a = {};
// const b = {
//     name : "tilak"
// }
// const c = {
//     name : 'ram'
// }

// a[b] = {
//     name : 'ankit'
// }

// a[c] = {
//     name : 'rahul'
// }

// console.log(a);


// console.log(a[b])


// const y = 0;
// const x = false;
// console.log(typeof x);
// console.log(typeof y);
// console.log(y==x);
// console.log(y===x);


// 


// console.log(NaN==NaN);
// console.log(NaN===NaN);



let arr = [4 , 5, 6 ,2];
let result = arr.map((data) => {
    return data>2;
})

let result2 = arr.filter((data)=>{
    return data > 2;
})

// console.log(result);
// console.log(result2);

let sortData = arr.sort((a , b)=>{
    return a-b;
});

console.log(sortData);
console.log(arr);