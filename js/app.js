/*********************************

Selectors

*********************************/

// Grabs input by the user
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

/*********************************

Event Listeners

**********************************/

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

/*********************************

Functions

**********************************/

// Builds function.
// Ads a todo.
function addTodo(event) {

  // Prevent form from submiting.
  event.preventDefault();

  // Creates Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Creates Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // Adds todo to local storage.
  saveLocalTodos(todoInput.value);

  //Check mark button.
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Check trash button.
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<li class="fas fa-trash"></li>'
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Appends to list.
  todoList.appendChild(todoDiv);

  // Clear todo input value.
  todoInput.value = "";

}

// Builds function.
// Deletes todo.
function deleteCheck(e) {

  // Grabs item on whetever we
  // are clicking on.
  const item = e.target;

  // Deletes todo.
  if(item.classList[0] === 'trash-btn') {

    const todo = item.parentElement;
    // Animation
    todo.classList.add('fall');
    removelocalTodos(todo)
    todo.addEventListener('transitionend', function(){

      todo.remove();

    });

  } else if(item.classList[0] === 'complete-btn') { // Check Mark

    const todo = item.parentElement;
    todo.classList.toggle('completed');

  }

}

// Builds function.
// Filters a todo.
function filterTodo(e) {

  // grabs all the todos.
  const todos = todoList.childNodes;
  console.log(todos);
  // Loops over all todos.
  todos.forEach(function(todo) {

    if(todo.classList !== undefined) {

      switch(e.target.value) {

        case "all":
          todo.style.display= "flex";
          break;

        case "completed":
          if(todo.classList.contains("completed")) {

            todo.style.display = "flex";

          } else {

            todo.style.display = "none";

          }
          break;

        case "uncompleted":
          if(!todo.classList.contains("completed")) {

            todo.style.display = "flex";

          } else {

            todo.style.display = "none";

          }
          break;

      }

    }

    return;

  });

}

// Builds function.
// Saves todos to local storage.
function saveLocalTodos(todo) {

  // Check -- hey do I already have things in there.
  let todos;

  // Builds if statement.
  if(localStorage.getItem('todos') === null) {

    // Creates empty array if it doesnt exist.
    todos = [];

  } else {

    // Parse to json.
    todos = JSON.parse(localStorage.getItem('todos'));

  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));

}

// Builds function.
function getTodos() {

  let todos;

  // Builds if statement.
  if(localStorage.getItem('todos') === null) {

    // Creates empty array if it doesnt exist.
    todos = [];

  } else {

    // Parse to json.
    todos = JSON.parse(localStorage.getItem('todos'));

  }

  todos.forEach(function(todo) {

    // Creates Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Creates Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check mark button.
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check trash button.
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fas fa-trash"></li>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Appends to list.
    todoList.appendChild(todoDiv);

  });

}
