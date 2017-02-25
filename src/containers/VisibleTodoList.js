import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import TodoList from '../components/TodoList';
import FetchError from '../components/FetchError';
import * as actions from '../actions';
import {getVisibleTodos, getIsFetching, getErrorMessage} from '../reducers';

class VisibleTodoList extends Component {

    componentDidMount(prevProps) {
        this.fetchData();
    };

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    };

    fetchData() {
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter).then();
    }

    render() {
        const {toggleTodo, todos, isFetching, errorMessage} = this.props;
        if (isFetching && !todos.length) {
            return <p>Loading...</p>
        }

        if (errorMessage && !todos.length) {
            return (
                <FetchError
                    message={errorMessage}
                    onRetry={() => this.fetchData()}
                />
            );
        }
        
        return <TodoList todos={todos} onTodoClick={toggleTodo}/>
    }
}

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all';
    return {
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        todos: getVisibleTodos(state, filter),
        filter
    }
};

export default withRouter(connect(mapStateToProps, actions)(VisibleTodoList));