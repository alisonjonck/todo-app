import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

import { isEnabled } from '../lib/feature';

const App = () => {

    if (ENABLE_FILTER_TEST) {
        if (isEnabled('filter') && isEnabled('renderBottom') && isEnabled('filterTop')) {
            return (<div>
                <TodoFilter />
                <TodoList />
                <TodoInput />
            </div>);
        }
        if (isEnabled('renderBottom') && isEnabled('filter')) {
            return (
                <div>
                    <TodoList />
                    <TodoFilter />
                    <TodoInput />
                </div>
            );
        }
        if (isEnabled('filter')) {
            return (
                <div>
                    <TodoInput />
                    <TodoList />
                    <TodoFilter />
                </div>
            );
        }
    }

    if (isEnabled('renderBottom')) {
        return (
            <div>
                <TodoList />
                <TodoInput />
            </div>
        );
    }

    return (
        <div>
            <TodoInput />
            <TodoList />
        </div>
    );
}

export default App;