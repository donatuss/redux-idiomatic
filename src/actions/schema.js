import {Schema, arrayOf} from 'normalizr';

export const todo = new Schema('todos');
export const arraysOfTodos = arrayOf(todo);