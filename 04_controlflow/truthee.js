// const userEmail = "lulla@gmail.com"
// const userEmail = ""
const userEmail = []

if(userEmail){
    console.log("user have an email");
    
}
else console.log("user Dont have an email");


// falsy values
// false,0,-0, BigInt 0n , "" , null , undefined ,NaN

// truthy value
// "0" , 'flase', " " , [] , {} , function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty");  
}


// Nullish Coalescing operator (???): null undefine

let val1;
// val1 = 5 ?? 10       // op is 5
// val1 = null ?? 10     // op is 10
// val1 = undefined ?? 15    op is 15
val1 = null ?? 10 ?? 20    // op is 10


console.log(val1);
 
// Treinary operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >=80  ? console.log("Gretaer than 80") : console.log("flase")  