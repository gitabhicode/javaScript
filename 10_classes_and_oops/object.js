// javascript me saari cheee object hai
function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createuser(userName, score){
    this.username = userName
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++;
}

createuser.prototype.printME = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createuser("Abhishek" , 250)
const coffee = new createuser("Aryan" , 20)

chai.printME()