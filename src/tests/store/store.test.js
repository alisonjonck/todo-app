import store from '../../store/index';

test('should initialize', () => {

    expect(store.getState()).toEqual({
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
    })
});