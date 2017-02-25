import * as api from '../api';

const v4 = require('uuid/v4');

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text

});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

const receiveTodos = (response, filter) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response
});

export const fetchTodos = (filter) =>
    api.fetchTodos(filter).then(response =>
        receiveTodos(response, filter)
    );

export const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter
});