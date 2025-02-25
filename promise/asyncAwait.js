// function fetchData() {
//     return new Promise((resolve, rejected) => {
//         setTimeout(() => {
//             resolve("data is fatched successfully");
//         }, 2000);
//     });
// }

// async function processData() {
//     try {
//         console.log("Fetching data...");
//         const result = await fetchData();
//         console.log(result);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// processData();

// function data(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             resolve('promise resolve by the fn')
//         }, 2000);
//     })
// }

// async function fetchdata() {
//     console.log('fetching data...');
//     let result = await data();
//     console.log(result)
// }

// fetchdata();

//  console.log('other task');

function check() {
  return new Promise((resolve, rejected) => {
     resolve('hello world');
  });
}

async function handler() {
  const data = await check();
  console.log(data);
}

handler();
