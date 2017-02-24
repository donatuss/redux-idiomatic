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

export const receiveTodos = (response, filter) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response
});