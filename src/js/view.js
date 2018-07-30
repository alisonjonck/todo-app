import { isEnabled } from './lib/feature';

const getFilteredTodos = (state) => {
    switch (state.filter) {
        case 'done':
            return state.todos.filter(todo => todo.done);
        case 'open':
            return state.todos.filter(todo => !todo.done);
        default:
            return state.todos;
    }
}

export function render(el, state) {
    const todoItems = getFilteredTodos(state).map(renderTodoItem).join('');
    el.innerHTML = renderApp(
        renderInput(),
        renderTodos(todoItems),
        renderFilters(state.filter)
    );
}

function renderApp(input, todoList, filters) {
    
    if (isEnabled('filter') && isEnabled('renderBottom') && isEnabled('filterTop')) {
        return filters + renderAddTodoAtBottom(input, todoList);
    }

    var appContent = "";

    if (isEnabled('renderBottom')) {
        appContent = renderAddTodoAtBottom(input, todoList);
    } else {
        appContent = renderAddTodoAtTop(input, todoList);
    }

    if (isEnabled('filter')) {
        appContent += filters;
    }

    return appContent;
}

function renderAddTodoAtTop(input, todoList) {
    return `<div id="app">
        ${input}
        ${todoList}
    </div>`;
}

function renderAddTodoAtBottom(input, todoList) {
    return `<div id="app">
        ${todoList}
        ${input}
    </div>`;
}

function renderInput() {
    return `<div class="todo__input"><input type="text" id="todoInput"><button id="addTodo">Add</button></div>`;
}

function renderTodos(todoItems) {
    return `<ul class="todo">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
    const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
    return `<li class="${todoClass}">
        <input class="js_toggle_todo" type="checkbox" data-id="${todo.id}"${todo.done ? ' checked' : ''}>
        ${todo.text}
    </li>`;
}

function renderFilters(filter) {
    const all = `<input type="radio" id="radio_all" name="filter-todo" ${filter == "all" ? "checked" : ""}> 
    <label for="radio_all"> Mostrar todos </label>`;
    const open = `<input type="radio" id="radio_open" name="filter-todo" ${filter == "open" ? "checked" : ""}> 
    <label for="radio_open"> Somente abertos </label>`;
    const done = `<input type="radio" id="radio_done" name="filter-todo" ${filter == "done" ? "checked" : ""}>
    <label for="radio_done"> Somente fechados </label>`;

    return `<div>
        ${all}
        ${open}
        ${done}
    </div>`;
}