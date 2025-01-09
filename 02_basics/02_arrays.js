const marvelHeros = ['thor', 'ironman', 'spiderman']
const dcHeros = ['batman', 'superman', 'flash']

// marvelHeros.push(dcHeros)
// console.log(marvelHeros); //[ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros); //[ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]

const allNewHeros = [...marvelHeros, ...dcHeros] //spread opr
// console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));
console.log(Array.from({name: "Aman"})); //interesting (gives an empty array = [])


let score1 = 100
let score2 = 200
let score3 = 300
 console.log(Array.of(score1, score2 ,score3)); //[ 100, 200, 300 ]
 