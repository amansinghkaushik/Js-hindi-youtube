const user = {
    username: "Aman",
    price: 999,

    welcomeMessage: function () {
        // console.log(`${this.username} , welcome to website`);  
        // console.log(this);
             
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username= "Aman"
//     console.log(this.username);
// }

// chai()

// *********************************Arrow funtions********************************

const chai = () => {
    let username = "Aman"
    console.log(this);
}

// chai()

// const addtwo = (num1, num2) => {     //basic  (you have to write return with {})
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2  //implisite

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "Aman"})

console.log(addtwo(3,2));
