const todoReducer = (state = [], action) => {
    var newState;

    switch (action.type) {
        case 'ADD_TODO':
            newState = [...state,
            {
                id: state.length,
                text: action.text,
                done: false
            }];
            break;

        case 'TODO_TOGGLE_DONE':
            newState = [...state];
            for (let todo of newState) {
                if (todo.id === action.id) {
                    todo.done = !todo.done;
                    break;
                }
            }
            break;

        default:
            return state;
    }

    localStorage.setItem('savedTodos', JSON.stringify(newState));
    return newState;
};

export default todoReducer;