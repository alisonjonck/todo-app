import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodoState } from '../actions/index';

const mapStateToProps = state => {
    return { todos: state.todos, filter: state.filter };
}
const mapDispatchToProps = dispatch => {
    return {
        toggleTodoState: id => dispatch(toggleTodoState(id))
    };
}

class ConnectedTodoList extends Component {
    constructor() {
        super();

        this.handleToggleChange = this.handleToggleChange.bind(this);
    }

    handleToggleChange(todoId) {
        this.props.toggleTodoState(todoId);
    }

    getFilteredTodos() {
        switch (this.props.filter) {
            case 'done':
                return this.props.todos.filter(todo => todo.done);
            case 'open':
                return this.props.todos.filter(todo => !todo.done);
            default:
                return this.props.todos;
        }
    }

    render() {
        return (
            <ul className="todo">
                {this.getFilteredTodos().map(todo => {
                    const todoClassItem = "todo__item todo__item--" + todo.done ? "done" : "open";

                    return <li key={todo.id} className={todoClassItem}>
                        <label onClick={() => this.handleToggleChange(todo.id)} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                            {todo.text}
                        </label>
                    </li>
                })}
            </ul>
        );
    }
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(ConnectedTodoList);

export default TodoList;
