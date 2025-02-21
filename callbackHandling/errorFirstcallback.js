const divide = (a , b , callback)=>{
    if(b === 0){
        callback('Error : zero can not be a divisor' , null)
    }
    else{
        let result = a/b;
        callback(null , result)
    }
}

divide(10 , 10 , (err , result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`output is  ${result}`);
    }
})


const fetchData = (callback) => {
    setTimeout(() => {
        const result = 'data from server';
        const error = 'error from server';
        callback(null, result)
    }, 2000)
}

const handler = (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
}

console.log('data fetching...')
fetchData(handler);