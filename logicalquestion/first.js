let arr = [1,2,3,4,5,6,7,8,9];

function checkNum(num){
for(let i = 0 ; i < arr.length; i++){
    if(arr[i]===num){
        return i;
    }
}
return -1;
}

console.log(checkNum(1));