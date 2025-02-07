const promiseOne = new Promise(function(resolve, reject){
    // Do an Async Task
    // DB calls, cryptograpy, network
    setTimeout(function(){
        console.log('Async task is complete');  
        resolve()  
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolve');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function (){
        resolve({username:"Chai",
            email:"amansinghkasushik8@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Aman", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
        
    },2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('thr promise is either rejected or resolved');
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Aman", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
        
    },2000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    } catch(error){
        console.log(error);
        
    }
}

consumePromiseFive()

// async function getallUsers() {
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responce.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
        
//     }    
// }

// getallUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error);
})