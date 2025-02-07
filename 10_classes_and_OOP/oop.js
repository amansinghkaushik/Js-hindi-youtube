// const user = {
//     username : "Aman",
//     logInCount : 8,
//     signedIn : true,

//     getUserDetails : function(){
//         console.log("Got user details from database");
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());


// const promiseOne = new Promise()
// const date = new Date()

function user(username, logInCount, isLoggedIn){
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new user("Aman", 5, true)
const userTwo = new user("Chai", 10, false)

console.log(userOne);
console.log(userTwo)