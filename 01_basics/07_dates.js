// Dates

let myDate = new Date()
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 25)
// let myCreatedDate = new Date(2025, 0, 25, 5, 3)
let myCreatedDate = new Date("01-14-25")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default' , {
    weekday: "long",
})
