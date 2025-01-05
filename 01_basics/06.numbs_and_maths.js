const score = 400
// console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length); //3
//console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3)); // rounds off the number after 3 digits (123.9)

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); //will seprate it in commas 1,000,000 //'en-IN' cpnverts it into indian format

//*****************************maths**************************************

console.log(Math);

console.log(Math.abs(-4)); //turns negative value to positive
console.log(Math.round(4.3)); // gives the round off of the number
console.log(Math.ceil(4.3)); // gives the top value in round off
console.log(Math.floor(4.3)); // gives the below value in round off
console.log(Math.min(4,0,3,5,7));
console.log(Math.max(4,0,3,5,7));


console.log(Math.random()); // value between 0 to 1
console.log((Math.random()*10) + 1 ); // value between 1 to 9
console.log(Math.floor(Math.random()*10) + 1 );

const min = 10
const max = 20

console.log(Math.floor(Math.random) * (max - min + 1) + min);


