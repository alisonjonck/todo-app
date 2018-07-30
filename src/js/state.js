import { createStore } from './lib/state';

const initialState = {
    todos: [
        {
            id: 0,
            text: 'Take a look at the application',
            done: true
        },
        {
            id: 1,
            text: 'Add ability to filter todos',
            done: false
        },
        {
            id: 2,
            text: 'Filter todos by status',
            done: false
        },
        {
            id: 3,
            text: 'Filter todos by text',
            done: false
        }
    ],
    filter: 'all'
};

function todoChangeHandler(state, change) {
    switch (change.type) {
        case 'ADD_TODO':
            state.todos.push({
                id: state.todos.length,
                text: change.text,
                done: false
            });
            break;
        case 'TODO_TOGGLE_DONE':
            for (let todo of state.todos) {
                if (todo.id === change.id) {
                    todo.done = !todo.done;
                    break;
                }
            }
            break;
        case 'SET_FILTER':
            state.filter = change.filter;
            break;
    }

    localStorage.setItem('savedTodos', JSON.stringify(state.todos));
}

var localStorageTodos = initialState;
try {
    var storedTodos = JSON.parse(localStorage.getItem('savedTodos'));
    if (storedTodos.length > 0) {
        localStorageTodos.todos = JSON.parse(localStorage.getItem('savedTodos'));
    }
} catch (error) {

}

export const todos = createStore(todoChangeHandler, localStorageTodos);
