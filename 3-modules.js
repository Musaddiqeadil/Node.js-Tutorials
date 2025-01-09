// Export the add function from the app.js file

function add(a , b) {

    return a + b;
    
}

module.exports = add;


// import the add function to another file
const add = require('./app.js'); // Directly import the function

console.log(add(1, 2)); // Output: 3
