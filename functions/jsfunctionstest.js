// imports compiled to js (from ts) functions.ts file and calls methods
//
const { getName } = require("./functions");

// passed wrong 2nd val but runs
console.log(getName({first: 'b', second: "c"}));  

// passed missing values
console.log(getName());  