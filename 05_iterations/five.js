const coding = ["js", "ruby","java" , "pyhton" , "cpp"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
    
// })     


const myCoding = [
    {
        languageName: " JavaScript",
        languageFile: "js"
    },
    {
        languageName: " Java",
        languageFile: "java"
    },
    {
        languageName: " python",
        languageFile: "py"
    },
]

myCoding.forEach( (item) => {
     console.log(item.languageName);   
})