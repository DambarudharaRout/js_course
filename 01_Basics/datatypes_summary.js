// symbol datatype
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid)

//  array
const heros = ["Shaktiman", "naagraj", "doga"];

//object
let myObj = {
    name: "Hitesh",
    age: 22
};

//functions
const myFunction = function(){
    console.log("Hello World!!");
}
console.log(typeof myFunction)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// STACKS & HEAPS
// STACK -> for primitive datatype (Null, Undefined, Symbol, BigInt, Number, String, Boolean)
// HEAP -> for non-primitive datatype (Array, Object, Function)

// example of heap storage
let UserOne = {
    email: "dam@gmail.com",
    upi: "dam@ybl"
};

let UserTwo = UserOne;
UserTwo.email = "dam1622@gmail.com";
console.log(UserOne.email);
console.log(UserTwo.email);

// example of stack storage
let myYoutube = "dam123"
let anotherYt = myYoutube;
anotherYt = "damdam";
console.log(myYoutube);
console.log(anotherYt);


