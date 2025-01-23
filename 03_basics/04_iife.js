// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log("DB Connected");
})();     //; is imp for this case

( (name) => {
    // Unamed IIFE
    console.log(`DB Connected Two ${name}`);  
})("Aman")

