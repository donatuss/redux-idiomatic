import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions/todo';
import {getVisibleTodos} from '../reducers';
import {fetchTodos} from '../api';

class VisibleTodoList extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            fetchTodos(this.props.filter).then(todos =>
                console.log(this.props.filter, todos)
            );
        }
    };

    render() {
        return <TodoList {...this.props}/>
    }
}

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        filter
    }
};

export default withRouter(connect(mapStateToProps, {onTodoClick: toggleTodo})(VisibleTodoList));