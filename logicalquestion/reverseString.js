let str = "love.you.very.much.i";
let reverse = '';
let result = '';
for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == '.') {
        let rev = '';
        for (let j = reverse.length - 1; j >= 0; j--) {
            if (reverse[j] === '.') {
                continue;
            }
            rev += reverse[j];
        }
        console.log(rev);
        result += rev + '.';
        reverse = '';
        rev = ''
    }
    else if (i === 0) {
        reverse += str[i];
        let rev = '';
        for (let j = reverse.length - 1; j >= 0; j--) {
            if (reverse[j] == '.') {
                continue;
            }
            rev += reverse[j];
        }
        result += rev;
    }
    else{
    reverse += str[i];
    }

}


console.log(result);