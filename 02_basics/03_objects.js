// singleton

// objects litrals

const mySym = Symbol("key1")

const jsUser = {
    name: "Aman",
    "full name": "Aman Kaushik",
    [mySym]: "mykey1",
    age: 21,
    location:"delhi",
    email: "aman@gmail.com",
    isLoggedin: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "amansinghkaushik8@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "amansinghkaushik8@yahoo.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js Users");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js Users, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());