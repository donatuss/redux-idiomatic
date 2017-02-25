import {normalize} from 'normalizr';

import * as api from '../api';
import {getIsFetching} from '../reducers';
import * as schema from './schema';

export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter
    });

    return api.fetchTodos(filter).then(
        response => {
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response: normalize(response, schema.arraysOfTodos)
            })
        },
        error => {
            dispatch({
                type: 'FETCH_TODOS_FAILURE',
                filter,
                message: error.message || 'Unexcepted error.',
            })
        }
    );
};

export const addTodo = (text) => (dispatch) =>
    api.addTodo(text).then(response => {
        console.log(normalize(response, schema.todo));
        dispatch({
            type: 'ADD_TODO_SUCCESS',
            response: normalize(response, schema.todo),
        });
    });

export const toggleTodo = (id) => (dispatch) =>
    api.toggleTodo(id).then(response => {
        console.log(normalize(response, schema.todo));
        dispatch({
            type: 'TOGGLE_TODO_SUCCESS',
            response: normalize(response, schema.todo),
        });
    });