document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const emptyMessage = document.getElementById('empty-message');

    let todos = [];

    function updateEmptyMessage() {
        emptyMessage.style.display = todos.length === 0 ? 'block' : 'none';
    }

    function createTodoElement(todo) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.dataset.id = todo.id;

        const text = document.createElement('span');
        text.className = 'todo-text';
        text.textContent = todo.text;
        if (todo.completed) {
            text.classList.add('completed');
        }

        const completeBtn = document.createElement('button');
        completeBtn.className = 'btn-complete';
        completeBtn.textContent = todo.completed ? 'Undo' : 'Complete';
        completeBtn.onclick = () => toggleTodo(todo.id);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTodo(todo.id);

        li.appendChild(text);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        return li;
    }

    function addTodo(text) {
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        todos.push(todo);
        todoList.appendChild(createTodoElement(todo));
        updateEmptyMessage();
    }

    function toggleTodo(id) {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos[index].completed = !todos[index].completed;
            const todoElement = todoList.querySelector(`[data-id="${id}"]`);
            const text = todoElement.querySelector('.todo-text');
            const completeBtn = todoElement.querySelector('.btn-complete');
            
            text.classList.toggle('completed');
            completeBtn.textContent = todos[index].completed ? 'Undo' : 'Complete';
        }
    }

    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        const todoElement = todoList.querySelector(`[data-id="${id}"]`);
        todoElement.remove();
        updateEmptyMessage();
    }

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        if (text) {
            addTodo(text);
            todoInput.value = '';
        }
    });

    updateEmptyMessage();
});