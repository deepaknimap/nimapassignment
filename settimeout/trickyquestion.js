for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}

// //output will be 0,1,2,3,4


for (let  j = 0; j < 5; j++) {
    setTimeout(() => console.log(j), 0);
}
// //5,5,5,5,5



for (var k = 0; k < 5; k++) {
    setTimeout(() => console.log(k), 0);
}

// //5,5,5,5,5


var k;
for (k = 0; k < 5; k++) {
    setTimeout(() => console.log(k), 0);
}

// //5 , 5, 5, 5, 5

function x() {
    var i = 1;
    setTimeout(function () {
      console.log(i);
    }, 3000);
    console.log('Namaste Javascript');
  }
  x();

//outout will be 'namste javascript then 1


function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log('Namaste Javascript'); 
}
x();


///output will be 'namaste javascript' thne  6 six 5 time