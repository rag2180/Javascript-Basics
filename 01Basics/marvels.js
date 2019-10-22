// datatype - Array

// const superHeroes = ['Iron Man', 'SuperMan', 'Captain America'];

// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes.length);

// console.log(`we have ${superHeroes.length} super heroes`);

const numbers = ['one', 'two', 'three', 'four', 'five', 'six']
console.log(numbers)

// Start
numbers.shift(); // Returns the number which is deleted
console.log(numbers);
numbers.unshift('Something unshifted'); // Adds number to the start
console.log(numbers);

// End
numbers.pop() // Returns the number popped
console.log(numbers);
numbers.push('something pushed');
console.log(numbers);

// Middle
numbers.splice(2, 1, 'Something spliced in place of 3rd element');
console.log(numbers);