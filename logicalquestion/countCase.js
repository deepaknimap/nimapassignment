const str = "Hello World";
let upperCount = 0;
let lowerCount = 0;
for(let i = 0 ; i < str.length ; i++){
    if(str[i] >= 'a' &&  str[i] <='z'){
        lowerCount++;
    }
    else if(str[i] === ' '){
        continue;
    }
    else{
        upperCount++;
    }
}

console.log(upperCount);
console.log(lowerCount);

