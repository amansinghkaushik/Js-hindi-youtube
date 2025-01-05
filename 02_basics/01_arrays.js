// arrays

const myArr = [0,1,2,3,4,5,]

const myHeros = ['Ironman', 'Superman', 'Spiderman']

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) // push the number in the starting
myArr.shift() // removes the number added in the starting

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // gives -1

const newArr = myArr.join() // changes its type to string

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A", myArr);

const myN1 = myArr.slice(1,3)

console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1,3) // manupulates the orignal array

console.log(myN2);
console.log("C", myArr);