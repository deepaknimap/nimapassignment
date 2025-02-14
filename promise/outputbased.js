// console.log("Start");

// const promise = new Promise((resolve, reject) => {
//     console.log("Inside Promise");
//     resolve("Resolved");
// });

// promise.then((res) => console.log(res));

// console.log("End");


// //output 
// //start then end inside promise then resolved


// let promise = new Promise((resolve, reject) => {
//     resolve("First");
// });

// promise.then((res) => {
//     console.log(res);
//     return "Second";
// }).then((res) => {
//     console.log(res);
// });


//output first then second


// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");

//start then end then promise and then timeout


// const promise = new Promise((resolve, reject) => {
//     reject("Error occurred");
// });

// promise
//     .then((res) => console.log("Resolved:", res))
//     .catch((err) => console.log("Caught:", err))
//     .then(() => console.log("After Catch"));


// async function test() {
//     console.log(1);
//     await Promise.resolve();
//     console.log(2);
// }

// console.log(3);
// test();
// console.log(4);

// Implement a Promise-based Delay Function
// Write a function delay(ms) that returns a Promise, which resolves after ms milliseconds.

// function delay(ms){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//               resolve('promise is resolved');
//         } , ms)
//     })
// }


// delay(5000).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// Parallel API Calls with Async/Await
// Fetch data from two APIs in parallel using fetch() and Promise.all().

// async function fetchData() {
//     try {
//         let [data1, data2, data3] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/users'),
//             fetch('https://jsonplaceholder.typicode.com/todos'),
//             fetch('https://jsonplaceholder.typicode.com/alb')
//         ]);

//         let result = await data1.json();
//         console.log(result);

//         let result2 = await data2.json();
//         console.log(result2);
        
//         let result3 = await data3.json();
//         console.log(result3);
//     }
//     catch (err) {
//         console.log(err.message);
//     }

//     //   let result =  res.json();
//     //   console.log(result)
// }

// fetchData();
