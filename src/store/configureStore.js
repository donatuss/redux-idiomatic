import {createStore} from 'redux';
import todoApp from '../reducers/todos';
const v4 = require('uuid/v4');

const persistedState = {
    todos: [
        {
            id: v4(),
            text: 'E.' + Math.ceil(1000 * Math.random()),
            completed: false
        }, {
            id: v4(),
            text: 'E.' + Math.ceil(1000 * Math.random()),
            completed: false
        }],
};

export default () => {
    return createStore(todoApp, persistedState);
}