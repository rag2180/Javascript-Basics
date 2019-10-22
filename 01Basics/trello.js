const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0]);

let sayHello = function(){
    console.log("Greeting Message")
}

// Funtion without name is called callback
// days.forEach(function(){
//     console.log("Hello");
// });

// days.forEach(function(day, index){
//     console.log(`${day} - ${index}`);
// });

console.log(days.length)

for (let i = 0; i < days.length; i++){
    const element = days[i];
    console.log(element);
};

console.log("========");

for (let i = 5; i > -1; i--){
    const element = days[i];
    console.log(element);
};

let a = {};
let b = {};

console.log(2 == 2.0);
console.log(2 === 2.0);
console.log('' == '');
console.log(a == b);
console.log(a === b);