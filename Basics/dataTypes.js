//Premitive
// 7 types = string, number, boolean, null, undefined, symbol, BigInt
const score = 100;
const scoreValue = 100.3;
const isLogedIn = false;
const outsideTemp = null;
let userEmail; //undefined
const id = Symbol('123')
const anotherID = Symbol('123')
//console.log(id === anotherID);
//const bigNumber = 849859853439n


//reference(Non premitive)
//Array, object, Function
const heroes = ["shaktiman", "iroman"];

let myobj = {
    name: "anish",
    age: 20,
}


 
const myFunction =function(){
    console.log("hello world")
}
console.log(typeof myobj)