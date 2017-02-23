import {createStore} from 'redux';
import throttle from 'lodash/throttle';

import todoApp from '../reducers/todos';
import {loadState, saveState} from './localStorage'

const persistedState = loadState();
const store = createStore(
    todoApp,
    persistedState
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 5000));

export default () => {
    return store;
}