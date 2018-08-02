import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/index';

const mapStateToProps = state => {
    return { filter: state.filter };
}

const mapDispatchToProps = dispatch => {
    return {
        setFilter: filter => dispatch(setFilter(filter))
    };
}

class ConnectedTodoFilter extends Component {

    constructor() {
        super();
        this.state = { filter: 'all' };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(event) {
        this.setState({ filter: event.target.value });
        this.props.setFilter(event.target.value);
    }

    render() {
        const { filter } = this.state;
        return (
            <div id="todoFilter">
                <input type="radio" id="radio_all" name="filter-todo" value="all" checked={filter == "all"} onChange={this.handleFilterChange} />
                <label htmlFor="radio_all"> Mostrar todos </label>
                <input type="radio" id="radio_open" name="filter-todo" value="open" checked={filter == "open"} onChange={this.handleFilterChange} />
                <label htmlFor="radio_open"> Somente abertos </label>
                <input type="radio" id="radio_done" name="filter-todo" value="done" checked={filter == "done"} onChange={this.handleFilterChange} />
                <label htmlFor="radio_done"> Somente fechados </label>
            </div>
        );
    }
}

const TodoFilter = connect(mapStateToProps, mapDispatchToProps)(ConnectedTodoFilter);

export default TodoFilter;