function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName()

// function addTwoNUmbers(number1, number2){
//     console.log(number1+number2); 
// }
function addTwoNUmbers(number1, number2){
    return number1+number2; 
}
const result = addTwoNUmbers("1",2)
console.log("Result: " , result);

 function loginUserMessage(userName = "ram" ){
    if(!userName){
        console.log("Please Enter the user name");
        return 
    }
    return ` ${userName} just logged in`
 }

console.log(loginUserMessage("sam"));   // it will be overwrited over ram
// console.log(loginUserMessage("Abhishek"));

function calculateCartPrice(val1,val2,val3,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000,2015,2018));

const user = {
    userName: "Abhishekke",
    price:199 
}

function handleobject(anyObject){
        console.log(`User name is ${anyObject.userName}  and its price is ${anyObject.price}`);

}
// handleobject(user)
handleobject({
    userName: "sam yadav",
    price: 199
})

// Passing array into functions

const myArray = [1,2,3,4,5,6]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100,200,300,400]));
