let name = "deepak kailash goswamee";

function longestWord() {

    let arr = name.split(" ");
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
    }

    return longestWord;

}

console.log(longestWord());