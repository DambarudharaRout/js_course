// symbol as an object key
const secret = Symbol('secret');
const JSUser = {
    name: "Hitesh",
    age: 18,
    [secret]: 'hidden'
}
console.log(JSUser)

// functions
JSUser.greeting = function(){
console.log("Hello JSUser");
}

JSUser.greetingTwo = function()
{
    console.log(`Hello JSUser, ${this.name}`);
}
console.log(JSUser.greeting())
console.log(JSUser.greetingTwo())