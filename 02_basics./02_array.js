const marvel_heroes = ["thor" , "batman" , "spiderman"]
const dc_heroes = ["superman" , "shaktiman" , "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_Heroes = [...marvel_heroes,...dc_heroes]  // ... here  is spread operrator same as concat operator
console.log(all_new_Heroes); 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// console.log(Array.isArray("Abhishek"));   // chech wheter abhishek is array
console.log(Array.from("Abhishek"));    // convert Abhishek  into array

console.log(Array.from({name: "Abhishek"}));  //interesting   // it will give emty array as output []
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));  // convert scores into array [ 100, 200, 300 ]
