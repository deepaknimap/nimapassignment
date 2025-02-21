function divide(a, b, callback) {
    if(b === 0){
        callback('can not divide zero' , null)
    }else{
         let result = a/b;
        callback(null , result)
    }
}

function callbackhandler(err, result) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
}

divide(100, 10 , callbackhandler);