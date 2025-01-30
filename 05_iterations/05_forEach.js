const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
    
// })

// *********************** or ***************************

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// *********************** or ***************************

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// ************************************************************************************

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        laguageName: "JavaScript",
        languageFileName: "js"
    },
    {
        laguageName: "Java",
        languageFileName: "java"
    },
    {
        laguageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.laguageName);
})