import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

import './TodoInput.css';

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    };
}

class ConnectedTodoInput extends Component {
    constructor() {
        super();
        this.state = { text: '' };

        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.getElementById("todoInput").focus();
    }

    handleSubmit(event) {
        event.preventDefault();
        const { text } = this.state;
        this.props.addTodo(text);
        this.setState({ text: '' });
        
        document.getElementById("todoInput").focus();
    }

    handleTodoChange(event) {
        this.setState({ text: event.target.value });
    };

    render() {
        const { text } = this.state;
        return (
            <form className="todo__input" onSubmit={this.handleSubmit}>
                <input type="text" id="todoInput" value={text} onChange={this.handleTodoChange} />
                <button type="submit" id="addTodo">Add</button>
            </form>
        );
    }
}

const TodoInput = connect(null, mapDispatchToProps)(ConnectedTodoInput);

export default TodoInput;