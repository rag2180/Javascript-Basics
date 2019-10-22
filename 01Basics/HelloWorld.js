console.log('Hello World');
let name = 'Raghav';
let score = 60;
// let is used to declare a variable
// const is used to declare a constant
// var is used to declare a variable
// let vs var is in scope.js
bonus = 30;

var finalScore = score + bonus;
console.log(finalScore)

if (finalScore > 100){
    console.log("Score Greater than 100");
}
else if (finalScore>50){
    console.log("Score less than 100 but greater than 50");
}
else{
    console.log("Score is less than 50")
}