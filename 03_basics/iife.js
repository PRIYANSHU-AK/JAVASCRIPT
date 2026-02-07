// Immediately Invoked Function Expressions (IIFE)

// function water() {
// console.log(`DB CONNECTED`);
// }
// water()

(function water() {
    // named iife
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);  
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);  
}) ("priyanshu")
( (name) => {
    console.log(`DB CONNECTED TWO ${this.name}`);    // here the output show undefined in place of name
}) ("priyanshu")