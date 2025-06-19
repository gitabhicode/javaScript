const myObject = {
    js: 'javaScript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {       //  for in loop works for objects
    console.log(`${key} shortcut is for ${myObject[key]}`);    
}

let arr = ["js", "c" , "cpp" , "java"]
for (const key in arr) {
     console.log(arr[key]);
     
}

const map = new Map()
map.set('IN' , "INDIA")
map.set('US' , "USA")
map.set('FR' , "FRANCE")

for (const key in map) {
   console.log(key); 
}