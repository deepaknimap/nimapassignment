function greeting(message, cb) {
    return cb(message)
}

const sayhello = function(message){
    return (name)=>{
        console.log(`${message} ${name}`)
    }
};

let greet = greeting("hello good morning", sayhello);
greet('deepak');
greet('rahul');
