const orderTea = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('order is placed')
        }, 1000)
    })
}


const Tea = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('tea is ready')
        }, 1000)
    })
}

async function checkPromise() {
    try {
        let order = await orderTea();
        console.log(order);
        let result = await await Tea();
        console.log(result);
        console.log('order is served');
    }
    catch (Err) {
        console.log(Err);
    }
}

checkPromise();