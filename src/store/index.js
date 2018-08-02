import { createStore, combineReducers } from 'redux';

import filterReducer from '../reducers/filterReducer';
import todoReducer from '../reducers/todoReducer';

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

var localStorageTodos = initialState;
try {
    var storedTodos = JSON.parse(localStorage.getItem('savedTodos'));
    if (storedTodos.length > 0) {
        localStorageTodos.todos = JSON.parse(localStorage.getItem('savedTodos'));
    }
} catch (error) {

}

const todos = createStore(combineReducers({
    todos: todoReducer,
    filter: filterReducer
}),
    localStorageTodos
);

export default todos;
