import {connect} from 'react-redux';

import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions/todo';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(
                t => t.completed
            );
        case 'active':
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos;
            //throw new Error(`Unknown filter: ${filter}`);
    }
};

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(
        state.todos,
        ownProps.filter
    )
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);