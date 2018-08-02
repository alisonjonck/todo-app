import { TODO_TOGGLE_DONE, ADD_TODO, SET_FILTER } from '../constants/action-types';

export function toggleTodoState(id) {
    return {
        type: TODO_TOGGLE_DONE,
        id
    };
}

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}
