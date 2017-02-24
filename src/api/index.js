const v4 = require('uuid/v4');

const fakeDatabase = {
    todos: [
        {
            id: v4(),
            text: 'E.' + Math.ceil(1000 * Math.random()),
            completed: true,
        },
        {
            id: v4(),
            text: 'E.' + Math.ceil(1000 * Math.random()),
            completed: true,
        },
        {
            id: v4(),
            text: 'E.' + Math.ceil(1000 * Math.random()),
            completed: false,
        },
        {
            id: v4(),
            text: 'E.' + Math.ceil(1000 * Math.random()),
            completed: false,
        }
    ],
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => delay(500).then(() => {
    switch (filter) {
        case 'all':
            return fakeDatabase.todos;
        case 'completed':
            return fakeDatabase.todos.filter(
                t => t.completed
            );
        case 'active':
            return fakeDatabase.todos.filter(
                t => !t.completed
            );
        default:
            throw new Error(`Unknown filter: ${filter}.`);
    }
});