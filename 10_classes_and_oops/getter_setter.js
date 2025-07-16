class user{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}Abhishek`
    }

    set password(value){
         this._password = value.toUpperCase()
    }
}
const abhishek = new user("Abhi@gmail.com" , "abhhis")
console.log(abhishek.password);
console.log(abhishek.email);