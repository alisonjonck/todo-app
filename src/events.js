import todos from './store';
import { listen } from './lib/events';
import { addTodo, toggleTodoState, setFilter } from './actions';

const saveTodos = () => {
    localStorage.setItem('savedTodos', JSON.stringify(todos.getState().todos));
};

const addTodoHandler = event => {
    const todoInput = document.getElementById('todoInput');
    todos.dispatch(addTodo(todoInput.value));
    event.stopPropagation();
    saveTodos();
    document.getElementById("todoInput").focus();
};

export function registerEventHandlers() {
    listen('click', '#addTodo', event => {
        addTodoHandler(event);
    });

    listen('click', '.js_toggle_todo', event => {
        const id = Number.parseInt(event.target.getAttribute('data-id'), 10);
        todos.dispatch(toggleTodoState(id));
        saveTodos();
    });

    listen('keyup', '#todoInput', event => {
        if (event.key === 'Enter') {
            addTodoHandler(event);
        }
    });

    // Filtros
    listen('click', '#radio_all', event => {
        todos.dispatch(setFilter('all'));
    });
    listen('click', '#radio_done', event => {
        todos.dispatch(setFilter('done'));
    });
    listen('click', '#radio_open', event => {
        todos.dispatch(setFilter('open'));
    });
}
