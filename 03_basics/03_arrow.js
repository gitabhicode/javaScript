const user = {
      userName: "Abhishek",
      price: 999,
      
      welcomeMessage: function(){
//          console.log(`Hello ${this.userName} , welcome to the website`);
//          console.log(this);
    }
}

// user.welcomeMessage();  // output is Hello Abhishek , welcome to the website
// user.userName = "Sam"
// user.welcomeMessage(); // output is Hello Sam , welcome to the website

// console.log(this);   // output is empty { }

// function chai(){
//     let userName = "hitesh"
//     console.log(this.userName);
// }

// chai()

// const chai = function(){
//     let userName = "hitesh"
//     console.log(this.userName);
// }
// const chai = () =>  {    // arrow function
//     let userName = "hitesh"
//     console.log(this);
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => (num1 * num2)   // if we use parenthesis no ndee to use retrun keyword
const addTwo = (num1,num2) => ({userName: "Abhishek"}) // way to return object

console.log(addTwo(1,3));