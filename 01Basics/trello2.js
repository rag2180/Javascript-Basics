const myTodos = []

myTodos.push('Buy Bread');
myTodos.push('Watch Course Vode');
myTodos.push('Go to Gym');

myTodos.forEach(function(todo, index){
    console.log(`Your Task number ${index + 1} is ${todo}`);

});

