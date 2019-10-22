var john = {
    name: "I am John",
    age: 24,
    isActive: true
};

var marry = {
    name: "I am Marry",
    age: 21,
    isActive: true
};

var sam = {
    name: "I am Sam",
    age: 30,
    isActive: false
};

let users = new Map(); // Map returns Iterterable

console.log("Users Type");
console.log(typeof users);

users.set('john', john);
users.set('marry', marry);
users.set('sam', sam);

console.log("Users:");
console.log(users);
console.log("Users Keys:");
console.log(users.keys());
console.log("Users Values:");
console.log(users.values()); //Values is function
console.log("Users Size:"); //Size is property. This is biggest advantage for using MAP instead of OBJECT
console.log(users.size);
console.log("Fetching Key Sam:");
console.log(users.get('sam'));

// Loops - for of
console.log("Looping over keys of Users:");
for (const key of users.keys()){
    console.log(key);
}
console.log("Looping over Values of Users:");
for (const key of users.values()){
    console.log(key);
}

console.log("Looping over Both Keys and Values of Users:");
for (const [key, value] of users.entries()){
    console.log(key, value);
}

console.log("Looping over Both Keys and Values of Users Once Again:");
users.forEach((value,key)=>console.log(key, value));

console.log("Creating a New Map with list of list:");
var arrofArr = [["one","1"],["two","2"],["three","3"]];
var newMap = new Map(arrofArr);
console.log(newMap);

console.log("Looping over this New Map:");
for (const [k,v] of newMap.entries()){
    console.log(k,v);
};
