

// let num = 10;
// for(let i = 1; i <= num ; i ++){
//       console.log(a);
//       let c = a+b;
//       a = b;
//       b = c;
// }


function fabSeries(num, a = 0, b = 1) {
    if (num > 0) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
        num--;
        fabSeries(num , a , b);
    }
}

fabSeries(10);