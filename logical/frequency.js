let names = "deepakgoswami";
let freq = {};
for(let i=0;i<names.length ; i++){
  if(!freq[names.charAt(i)]){
    freq[names.charAt(i)] =  1;
  }
  else{
    freq[names.charAt(i)]++;
  }
}

console.log(freq);

