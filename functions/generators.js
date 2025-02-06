function* generatorFn() {
    let data = yield 1;
    console.log(data);
    let data2 = yield 2;
    console.log(data2)
    let data3 = yield 3;
    console.log(data3);
    return 4;
}

const gen = generatorFn();
console.log(gen.next());
console.log(gen.next("hello world"));
console.log(gen.next("my name is deepak goswami"));
console.log(gen.next("by"));

// for(let data of gen){
//     console.log(data);
// }


