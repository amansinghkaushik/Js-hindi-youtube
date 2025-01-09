function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    
    // let results = number1 + number2
    // return results
    return number1 + number2
}

const results = addTwoNumbers(3,4) //7
// console.log("Result:",results);

// ********************************************************************************************

function loginUserMessage(username = "Sam"){
    if (!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} Just Lgged In`
}

// console.log(loginUserMessage("Aman"));
// console.log(loginUserMessage()); //undefined

function calculateCartPrice(...num1){ //rest operator (...)
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Aman",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray =[200, 400, 100, 600]

function retuenSecondValue(getArray){
    return getArray[1]
}

console.log(retuenSecondValue(myNewArray));


