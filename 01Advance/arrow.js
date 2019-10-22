const sayHello1 = function (name) {
    return `Hello, ${name}`
};
//console.log(sayHello1("Raghav"));


// Converting regular function to arrow function

const sayHello2 = (name) => {
    return `Hello, ${name}`
};
//console.log(sayHello2("Sam"));


// Another method of arrow function

const sayHello3 = (name) => `Hello, ${name}`
//console.log(sayHello3("Harry"));


const Todos = [{
    title: "Task 1",
    isDone: true
},{
    title: "Task 2",
    isDone: false
},{
    title: "Task 3",
    isDone: false
}];

// Function to pick tasks which are done
// Method 1
const ThingsDone1 = Todos.filter(function (todo) {
    return todo.isDone == true
});

// Method 2
const ThingsDone2 = Todos.filter((todo) =>  todo.isDone == true);

//console.log(ThingsDone1)
//console.log(ThingsDone2)

// Method 3
const findTodo = function (myTodos, title) {
    const index = myTodos.findIndex(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    });
    return myTodos[index]
    
}

//console.log(findTodo(Todos, "Task 2"))

// Method 4
const findTodo2 = function (myTodos, title) {
    const titleReturned = myTodos.find(function (todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    });
    return titleReturned
};

//console.log(findTodo2(Todos, "TaSk 1"))

/* Create a todo with 3 tasks. Use filter to figure out things which are not done and only title of this */


const Thing = function(myTodos){
    const TodosDone = Todos.filter(function (todo) {
        return todo.isDone === false
        //console.log(todo)
})
    return TodosDone.filter((todo) => todo.title);

};

// const findTodo5 = function (myTodos) {
//     const index = myTodos.findIndex(function (todo) {
//         return todo.isDone === false;
//     });
//     return myTodos[index]
//
// };
// console.log(findTodo5(Todos);

//console.log(ThingsDone1)
//console.log(ThingsDone2)
// console.log(Thing(Todos));

const ThingsDone = Todos.filter((todo) => todo.isDone === false);
console.log(ThingsDone)