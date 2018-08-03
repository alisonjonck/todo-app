import { addTodo, setFilter, toggleTodoState } from '../../actions/index';
import { TODO_TOGGLE_DONE, ADD_TODO, SET_FILTER } from '../../constants/action-types';

test('addTodo returns action reducer', () => {
    expect(addTodo('Add more tests')).toEqual({
        type: ADD_TODO,
        text: 'Add more tests'
    });
});

test('setFilter returns action reducer', () => {
    expect(setFilter('all')).toEqual({
        type: SET_FILTER,
        filter: 'all'
    });
});

test('toggleTodoState returns action reducer', () => {
    expect(toggleTodoState(0)).toEqual({
        type: TODO_TOGGLE_DONE,
        id: 0
    });
});
