// const tinderUser = new Object()     it is a singelton object
const tinderUser = {}     // non singelton object

tinderUser.id = "12345"
tinderUser.name = "Abhishek yadaav"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const metaUser = {
    email: "yadavabhishek@gmail.com",
    fullname : {
        userfullname : {
            firstname: "abhishek",
            lastname: " yadav"
        }
    }
}

// console.log(metaUser.fullname.userfullname.firstname); 

const obj1  = {1: "a" ,2: "b"} 
const obj2  = {3: "c" ,2: "d"} 

// const obj3 = {obj1 ,obj2}
// console.log(obj3);    // it will show result like { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'd', '3': 'c' } }

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1 , ...obj2}  // same output as above codes
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    courseName: "js in hindi",
    coursePrice: "999",
    courseInstructor: "Abhishek singh"
}

// course.courseInstructor

const {courseInstructor: hello} = course

// console.log(courseInstructor);
console.log(hello);


// {    LEARNIING API'S
//     "name" = "Abhishekyadav"
//     "coursename" = "js in hindi"
//     "price" = "free"
// }

[

]
