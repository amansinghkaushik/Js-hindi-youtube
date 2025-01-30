// for of

// [{}, {}, {}] objects inside array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// Maps  {unique values and are printed in same order}

const map = new Map()

map.set(`IN`, `India`)
map.set(`USA`, `United States of America`)
map.set(`FR`, `france`)
map.set(`IN`, `India`)

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,":-", value);
}


// objects are non iteratble
const myObject = {
    'game1': 'NFS',
    'game2': 'IGI',
    'game3': 'GTA'
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
    
}
