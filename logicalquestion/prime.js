// let number = 12;
// if (number < 2) {
//     console.log('not a prime number');
// }
// else {
//     let flag = true;
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             flag = false;
//             break;
//         }
//     }

//     if (flag) {
//         console.log(number + 'is a prime number')
//     }
//     else {
//         console.log(number + 'is not a prime number')
//     }

// }

/// check prime number upto n ..

let n = 50
function checkPrime() {
    for (let i = 2; i <= n; i++) {
        if (n < 2) {
            console.log('enter value greater then 2');
            break;
        }
        let flag = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if(flag){
            console.log(i + 'is a prime number')
        }
        else{
            console.log(i + 'is not a prime number')

        }

    }
}

checkPrime(n);