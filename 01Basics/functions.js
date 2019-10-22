// In console.log, console is a function

// declaration, name of function, block of code
let sayHello = function(user){
    console.log(`Greeting Message for ${user}`);
    console.log(`Hey ${user}`);
}

// call the function
// sayHello('Raghav')

let fullNameMaker = function(fname, sname){
    fullname = fname + ' ' + sname;
    console.log(`Your Full Name is ${fullname}`);
};

// fullNameMaker("Raghav", "Chopra")

let myMultiplier = function(num1, num2){
    res = num1 * num2;
    console.log(`Result is ${res}`);
};

myMultiplier(5,6)
myMultiplier() // Gives No Error - input params will be NaN
fullNameMaker() // Gives No Error - input params will be undefined

// Default parameters in javascript
let myName = function(fname="Raghav", sname){
    fullname = fname + ' ' + sname;
    console.log(`Your Full Name is ${fullname}`);
};

myName()