let arr = [1, 2, [3, 4], 6, [7, [8, 9], [10]]];
function covertarr(arr, result) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            covertarr(arr[i], result);
        }
        else {
            result.push(arr[i]);
        }
    }

    return result;

}

let result = [];

console.log(covertarr(arr, result));
