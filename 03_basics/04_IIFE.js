// Immediately Invoked Function Expressions (IIFE)

// actually due Global scope pollution there is a lot of problem to prevent global scope variable problem we use to immediately execute the function

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`DB City Mall  ${name}`);    
})(`Abhishek`)
    