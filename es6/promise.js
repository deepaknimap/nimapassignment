const hello = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolve')
        }, 1000)
    });
}

hello()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = a * b;
            resolve(result);
        }, 1000)
    });
}


const mul = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = a - b;
            resolve(result)
        }, 1000)
    });
}

const sub = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = a - b;
            resolve(result)
        }, 1000)
    });
}

add( 5 , 10)
.then((data)=>{
    console.log(data);
    return mul(data , 5);
})
.then((result)=>{
    console.log(result);
    return sub(result , 5)
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
