const marval_heros = ["Hulk" , "Captain America" , "Deadpool"]
const dc_heros = ["Spider Man" , "Batman" , "Flash"]

// marval_heros.push(dc_heros)
// console.log(marval_heros);
// console.log(marval_heros[3][2]);


// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

// const allNewHeros = [...marval_heros , ...dc_heros]
// console.log(allNewHeros);

// const anotherArray = [1,2,3 , [5,6],6,7,[7,8,[9,0]]]
// const realArray = anotherArray.flat(Infinity)
// console.log(realArray);


console.log(Array.isArray("Priyanshu"));
console.log(Array.from("Priyanshu"));
console.log(Array.from({name : "Priyanshu"}));

let score = 100
let score2 = 200
let score3= 300

console.log(Array.of(score, score2,score3));
// console.log(Array.from(score, score2,score3));