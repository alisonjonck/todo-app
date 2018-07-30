const todoReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
            {
                id: state.length,
                text: action.text,
                done: false
            }];

        case 'TODO_TOGGLE_DONE':
            const newState = [...state];
            for (let todo of newState) {
                for (let todo of newState) {
                    if (todo.id === action.id) {
                        todo.done = !todo.done;
                        return newState;
                    }
                };
            }
            
            return newState;

        default:
            return state;
    }
};

export default todoReducer;