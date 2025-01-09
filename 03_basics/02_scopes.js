let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Aman"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

// *****************************Intrusting*******************************

console.log(addone(5))

function addone(num){
    return num+1
}


//or

addtwo(5) // error
const addtwo = function(num){
    return num + 2
}
