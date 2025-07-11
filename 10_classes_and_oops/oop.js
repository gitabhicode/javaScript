const user = {
    username: "Abhishek",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  // current context it will print full information 
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  // it prints global context {}


function User(username , loginCount , isLogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this. isLogedIn =  isLogedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    // return this;
}

const userone = new User("Abhishek yadav" , 8 , true)
const usertwo = new User("hello yadav" , 9 , false)  // new keyword will not overwrite in the function

console.log(userone);
console.log(usertwo);

//step 1: when new keyword is used first of all empty object is created 
//step2:  constructor function call hota h new ke karaan jitne bhi argument hote hai use pack krke user ko de deta hai
//step 3: bcz of this keyword all argument is get innjected
//step4: hume mil jaata hai