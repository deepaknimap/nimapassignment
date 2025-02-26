let arr = [1 , 2, 3, 4 , undefined , null , '' , false , 0];
function check(){
 for(let i = 0 ; i < arr.length ; i ++){
    if(arr[i] || arr[i] === 0){
        console.log('true' +  arr[i])
    }
    else{
        console.log('false' +  arr[i])
    }
 }
}
check();