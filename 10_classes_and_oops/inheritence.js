class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{   // extends acts as prototype
    constructor(username, email, password){
        super(username)  // super keyword refers to the context user no need to use call and this keyword it automatically fetches 
        this.email = email
        this.password = password
    }

    addCourse(){   //method
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()


const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);