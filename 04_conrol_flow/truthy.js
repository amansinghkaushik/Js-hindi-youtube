const userEmail = []
if (userEmail){
    console.log("Got user Email");
} else {
    console.log("Don't havr user Email");
}

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy val

// "0", 'false', " ", [], {},function(){}, 

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nulish Coalesecing operators (??): null, undefined

let val1
// val1 = 5 ?? 10                                          //5
// val1 = null ?? 10                                       //10
// val1 = undefined ?? 15                                  //15
// val1 = null ?? 10 ?? 15                                 //10

// console.log(val1);

// Terniary Operators

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
