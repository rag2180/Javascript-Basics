/* 
let vs var
*/

let iAmGlobal = 'someValue'

if (true){
    let iAmLocal = 'someMoreValue' //this variable has scope inside parenthesis only
    var iAmLocalvar = 'var value' //But this variable has scope outside parenthesis also
    console.log(iAmGlobal);
    console.log(iAmLocal);
    iAmGlobal = 'someValue2'
    console.log(iAmGlobal);
}

// console.log(iAmLocal); This will give error if used.
console.log(iAmGlobal);
console.log(iAmLocalvar); // Notice that this doesn't give any error
