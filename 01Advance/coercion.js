// Coercion is a technique where javascript predicts
// and tries to do something on its own

console.log('5' - 5); // Treating first 5 as int
console.log('5' + 5); // Treating second 5 as string
console.log(true + 5); // true is considered 1

const giveType1 = typeof 5;
const giveType2 = typeof '5';
const giveType3 = typeof {};
console.log(giveType1);
console.log(giveType2);
console.log(giveType3);


const loginDetails = [];
// logic for getting details from DB

const loginID = loginDetails[0];

if (loginID !== undefined){
    console.log('Allow user to login!')
}else{
    console.log('Auth Failed!')
}

if ([]){
    console.log('Allow user to login!')
}else{
    console.log('Auth Failed!')
}

if (''){
    console.log('Allow user to login!')
}else{
    console.log('Auth Failed!')
}

if (' '){
    console.log('Allow user to login!')
}else{
    console.log('Auth Failed!')
}


// Values that are interpret as false - false,0,'',null,undefined
// Values that are interpret as true - everything else including [],{},1,true etc.
