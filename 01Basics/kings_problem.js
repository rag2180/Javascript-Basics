/*
kings Territory problem
*/

let king = 'John';

if (true){
    let king = 'Sam';

    if(true){
        let king = 'Ram';
        console.log(king);
        queen = 'Rani'  // This is global variable declaration
        
    }
    console.log(king);
}

if (true){
    console.log(king)
}

console.log(queen); // because queen is global variable

// Always declare your variable using let, var or const.
// This queen variable can be a huge problem. Never use undeclared variable
