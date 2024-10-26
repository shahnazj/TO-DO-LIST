let todos = JSON.parse(localStroage.getItem('todos')) || [];

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

window.addEventListener('load', () => {
    renderTodos(todos);

});
todoForm.addEventListener('sibmit', (event) => {
    event.preventDefault();

    const todoTitle = todoInput.ariaValueMax.trim();
    if (todoTitle === '') return;

    const newTodo = {
        id: Date.now (),
    title: todoTitle,
completed: false };

todos.push(newTodo);
saveTodos(todos);
renderTodos(todos);

todoInput.value = ''; 
});
function renderTodos(todosArray) {
    todoList.innerHTML = '';
    
    todosArray.forEach (todo => {
        const li = document.createElement('li');
        li.classList.add(todo.completed ? 'completed' : '');

        li.innerHTML = `
        <span>${todo.title}</span>
        <div>
            <button class="complete-btn>${todo.completed ? 'Undo' : 'Complete'}</button>
            <button class="delete-byn">Delete</bitton>
            </div>
        `;

        li.querySelector('.complete-btn').addEventListener('click', () => {
            toggleComplete(todo.id);

        });
        li.querySelector('delete-btn').addEventListener('click', () => {
            deleteTodo(todo.id);
         });
         todoList.appendChild(li);



    });
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    seveTodos(todos);
    renderTodos(todos);
    renderTodos(todos);
}

function saveTodos(todosArray) {
    localStorage.setItem('todo', JSON.stringify(todosArray));
}