/*********************************

Selectors

*********************************/

// Grabs input by the user
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

/*********************************

Event Listeners

**********************************/

// Adds event listener.
// adds a todo every time the
// button is clicked.
todoButton = addEventListener("click", addTodo);


/*********************************

Functions

**********************************/

// Builds function.
function addTodo(event) {

  // Prevent form from submiting.
  event.preventDefault();

  // Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Creates Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
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

  // Clear todo input value.
  todoInput.value = "";

}
