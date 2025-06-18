//  let c= 300
 let a = 3000
 if (true) {
    let a = 10 
    const b = 20
    // let c = 30
    // console.log("Inner: " , a); 
}

console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const userName = "abhishek"

    function two(){
        const website = "youtube.com"
        // console.log(userName);     
    }
    // console.log(website);

    two()
} 

// one()

if(true) {
    const userName = "hitesh"
    if(userName == "hitesh"){
        const website = "youtube"
        // console.log(userName + website);  
    }
    // console.log(website);
}

// console.log(userName);


// *****************************interesting******************

console.log(addone(4));  // is correct
function addone(num){
     return num+1
}

// console.log(addone(6)); 
// console.log(addTwo(5));   will not give output
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));