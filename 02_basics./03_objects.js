//singelton
//object.create{}

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Abhishek yadav",
    "full name": "Abhi singh Chauhan",
    age: 18,
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "abhshek@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Moday" , "tuesday"]
}

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); 
console.log(typeof JsUser[mySym]);

JsUser.email = "hitesh@gamil.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@micro.com"
console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello boss")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());