import reducer from '../../reducers/todoReducer';
import { TODO_TOGGLE_DONE, ADD_TODO } from '../../constants/action-types';

test('todoReducer should return the initial state', () => {

    expect(reducer(undefined, {})).toEqual([]);
});

test('should handle addTodo', () => {

    expect(reducer([], {
        type: ADD_TODO,
        text: 'Test reducer'
    })).toEqual([{
        id: 0,
        done: false,
        text: 'Test reducer'
    }]);
});

test('should handle toggleTodo', () => {

    expect(reducer([{
        id: 0,
        done: false,
        text: 'Test reducer'
    }], {
            type: TODO_TOGGLE_DONE,
            id: 0
        })).toEqual([{
            id: 0,
            done: true,
            text: 'Test reducer'
        }]);
});