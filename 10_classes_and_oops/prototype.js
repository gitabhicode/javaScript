// let myName = "ABhishek yadav       "
// let urname = "Lily yadav       "

// console.log(myName.truelength)   challenge is to get the true length not spaces

let myheroes = ["thore" , "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
 
Object.prototype.abhishek = function(){  // object ke  andar fucntion daal diya
    console.log("Abhishek is present is all objects")
}


// heroPower.abhishek()
// myheroes.abhishek()

Array.prototype.heyabhi = function(){  // array ke andar property inject kar di
    console.log(`hey brother welcome you to the NIT'B`)
}

// heroPower.heyabhi() object ke paass access nhi hai array ki  property ka
myheroes.heyabhi()

// inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// modern syntax
 
Object.setPrototypeOf(TeachingSupport , Teacher)  // Teaching support can now access the property of teacher

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()