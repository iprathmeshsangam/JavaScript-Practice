

const marvelHero = ["thor","IronMan" , "spiderman"];
const dcHeros = ["superman", "Flash","batman"]
const heros = [...dcHeros , ...marvelHero];

console.log(heros);

const another_array = [1,2,3,4,5,[4,5,6],7,8,[6,7,8,[6,7,8,],9,1]];

console.log(another_array.flat(Infinity));// flat infinity will give you all the array element in a single array 

let num1 = 100
let num2 = 200
let num3 = 300 

console.log(Array.of(num1,num2,num3)); // this will convert string into Array


