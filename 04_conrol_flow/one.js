// if 

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature < 50){
//     console.log(`temoerature is less than 50`);
// } else {
//     console.log(`temperature is greater than 50`);
    
// }

// <, >, <=, >=, ==, !=,

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 1000

// if (balance>500) console.log("test");               //implicite way

// if (balance < 500){
//     console.log(`less than 500`);
// } else if (balance < 750){
//     console.log(`less than 750`);
// } else if (balance < 900){
//     console.log(`less than 900`);
// }else{
//     console.log(`less tha 1200`);
// }

const userLoggedIn = true
const debitCard =  true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log(`Allowed to buy Course`);
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log(`user logged in`);
}