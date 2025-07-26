// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

let myCreatedDate = new Date("07-26-2025");
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
//to convert into seconds 
console.log(Math.floor(myCreatedDate.getTime()/1000))

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

newDate.toLocaleString()