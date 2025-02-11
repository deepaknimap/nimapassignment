
const names = {
    name: 'joy',
    getDetails() {
        console.log(this);
    }

}
let details = names.getDetails.bind(names);
details()

const company = {
    name : 'nimap_infotech',
    address : "lower_parerl suns mills compund",
    getDetails(){
        console.log(this.name);
        console.log(this.address)
    },
    stabilised : 2010
}

const {address: add, name , getDetails , stabilised: stb} = company;

console.log(stb);

let arr = [1,2,3,4];
let arr2 = [5 , 6, 7 ,8];

let newArr = [...arr , ...arr2];
console.log(newArr);