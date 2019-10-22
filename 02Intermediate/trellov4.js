const myTodos = ["Task 1", "Task 2", "Task 3"];

console.log(myTodos.indexOf("Task 2")); // 1
console.log(myTodos.indexOf("Task 10"));  // -1 - because this doesn't exist in the list

const newTodos = [{
    title: "Task 1",
    isDone: false,
},{
    title: "Task 2",
    isDone: true,
},{
    title: "Task 3",
    isDone: false,
}];

const index = newTodos.findIndex(function (todo, index) {  // Callback function
    console.log(todo)
    return todo.title === "Task 3"
});

console.log(index);


// Method 1
const findTodo = function (Todos, title) {
    const index = Todos.findIndex(function (todo, index) {
        return todo.title.toLowerCase() == title.toLowerCase();
        
    })
    return myTodos[index]
}

console.log(findTodo(newTodos, "Task 3"));


// Method 2
const findTodo2 = function (Todos, title) {
    const titleReturned = Todos.find(function (Todo, index) {
        return Todo.title.toLowerCase() == title.toLowerCase()
    })
    return myTodos[index]
}

console.log(findTodo2(newTodos, "Task 3"));