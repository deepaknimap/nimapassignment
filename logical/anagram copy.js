function check(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let freq1 = {};
    let freq2 = {};

    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }

    for (let char of str2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }

    
    for(let char in freq1){
        if(freq1[char] !== freq2[char]){
          return  console.log('not anagram string');
        }
        
    }
     console.log('anagram string')
   
    // return true;
}
console.log(check('aab', 'aba'));