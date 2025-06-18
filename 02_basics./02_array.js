const marvel_heroes = ["thor" , "batman" , "spiderman"]
const dc_heroes = ["superman" , "shaktiman" , "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_Heroes = [...marvel_heroes,...dc_heroes]  // ... here  is spread operrator same as concat operator
console.log(all_new_Heroes);


