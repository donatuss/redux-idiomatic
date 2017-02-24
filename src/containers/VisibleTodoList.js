import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions/todo';
import {getVisibleTodos} from '../reducers';

const mapStateToProps = (state, {params}) => ({
    todos: getVisibleTodos(
        state,
        params.filter || 'all'
    )
});

export default withRouter(connect(mapStateToProps, {onTodoClick: toggleTodo})(TodoList));