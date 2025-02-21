// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise Resolved");
// });

// console.log("End");

// async function example() {
//     console.log("1");
//     await Promise.resolve();
//     console.log("2");
// }

// console.log("3");
// example();
// console.log("4");



// async function foo() {
//     console.log(1);
//     await console.log(2);
//     console.log(3);
// }

// console.log(4);
// foo();
// console.log(5);

async function foo() {
    return await 'hello world';
}

console.log(foo());


console.log(10<9<1);