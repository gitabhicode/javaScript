// for of loop

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);  
}

const greetings = "hello worlds"
for (const greet of greetings) {
    // console.log(greet);
    
}

// Maps

const map = new Map()
map.set('IN' , "INDIA")
map.set('US' , "USA")
map.set('FR' , "FRANCE")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of myObject) {        // not iterable
//     console.log(key,':-' , value); 
// }