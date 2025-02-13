let data = true;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data) {
            resolve('data fetched successfully')
        }
        else{
             reject('oops there something went wrong');
        }
    }, 0)
})

promise.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log('finally block executed');
})


console.log('processing...')

fetch('https://jsonplaceholder.typicode.com/posts')
.then( (data)=>{
   return data.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.message)
})
.finally(()=>{
    console.log('process ended');
})