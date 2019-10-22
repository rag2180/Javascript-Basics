let userEmail = "Raghav21803123";
let password = "1234";

console.log(password.length);
console.log(userEmail.toLocaleLowerCase());

let userCheker = function (myString) {
    if (myString.includes("123") && (myString.length > 6)) {
        return true;
    }
    return false;
    
};

let passChecker = function (myString) {
    if (myString.includes("123@#") && (myString.length > 6)) {
        return true;
    }
    return false;

};

console.log(userCheker(userEmail));
console.log(passChecker(password));