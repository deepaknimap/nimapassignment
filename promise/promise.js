const promise = new Promise((resolve , reject)=>{
      setTimeout(()=>{
         resolve('promis is resolve');
      } , 1000)
})

console.log(promise);

promise.then((result)=>{
    console.log(result);
})

//make icream 

//take place order 
//conform production
let isShop_Closed = false;

const stock = {
    fruit: ['STRABARYY', 'APPLE', 'BANANA'],
    liquid: ['water', 'ice'],
    holder: ['cone', "cup", "stick"],
    topping: ["chocolate", "peanuts"]
}

// const order = () => {
//     if (isShop_Closed) {
//         console.log('sorry shop is closed')
//     }
//     else {
//         console.log('order placed');

//         setTimeout(() => {
//             console.log(`your order is ${stock.fruit[0]} ice cream`);
//             // production();
//             // production2();
//         }, 2000);
//     }

// }


//call back hell condition raised herer
const production = () => {
    setTimeout(() => {
        console.log('production is started');
        setTimeout(() => {
            console.log('fruit has been chocked');
            setTimeout(() => {
                console.log(`fruit has been mixed ${stock.liquid[0]} and ${stock.liquid[1]}`);
                setTimeout(() => {
                    console.log('machine was started');
                    setTimeout(() => {
                        console.log(`ice cream was place on ${stock.holder[0]}`);
                        setTimeout(() => {
                            console.log(`chocalate was added on ${stock.topping[0]}`);
                            setTimeout(() => {
                                console.log(`servser ice cream`);
                            }, 500)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 2000)
        })
    }, 500);
}

// order()


const choke = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`fruit has been choked`);
        }, 1000)
    })
}

const mixed = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`fruit has been mixed ${stock.liquid[0]} and ${stock.liquid[1]}`);
        }, 1000)
    })

}

const holder = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`ice cream was place on ${stock.holder[0]}`);
        }, 1000)
    })
}

const startMachine = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`machine started`);
        }, 1000)
    })
}


const topping = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`ice cream was added on ${stock.topping[0]}`);
        }, 1000)
    })
}

const productions = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`producation is started`);
        }, 1000)
    })
}

const placeOrder = () => {
    return new Promise((resolve, rejcted) => {
        setTimeout(() => {
            if (isShop_Closed) {
                rejcted('shop is closed');
            }
            else {
                resolve(`order is placed your order id ${stock.fruit[0]} ice cream`);
            }
        }, 1000)
    })
}


async function order() {
    try {
        let data = await placeOrder();
        console.log(data);
        let data1 = await productions();
        console.log(data1);
        let result = await choke();
        console.log(result);
        let result2 = await mixed();
        console.log(result2)
        let result3 = await holder();
        console.log(result3)
        let result4 = await startMachine();
        console.log(result4)
        let result5 = await topping();
        console.log(result5);
        console.log('ice cream is served');
    }
    catch (Err) {
        console.log(Err);
    }

}

order();


// const production2 = () => {
//     console.log('production is started');
//     choke().then((result) => {
//         console.log(result)
//         return mixed();
//     })
//         .then((result) => {
//             console.log(result);
//             return startMachine();
//         })
//         .then((result) => {
//             console.log(result);
//             return holder();
//         })
//         .then((result) => {
//             console.log(result);
//             return topping();
//         })
//         .then((result) => {
//             console.log(result);
//             console.log('serve ice cream');
//         })
//         .catch((err) => {
//             console.log(err.message)
//         })
//         .finally(() => {

//             console.log('shop is closed')

//         })

// }

// production2();