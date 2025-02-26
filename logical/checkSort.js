let value = [1 , 2, 3  , 5 , 4];
function checkSort() {
    let check = true;

    let isAccending = value[0] < value[1];

    for (let i = 0; i < value.length; i++) {
        if (isAccending && value[i] > value[i + 1]) {
            check = false;
            break;
        }
        else if (!isAccending && value[i] < value[i + 1]) {
            check = false;
            break;
        }
    }


    return check ? true : false;
}

console.log(checkSort());
