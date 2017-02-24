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

export const fetchTodos = (filter) => delay(3000).then(() => {
    switch (filter) {
        case 'all':
            return fakeDatabase;
        case 'completed':
            return fakeDatabase.filter(
                t => t.completed
            );
        case 'active':
            return fakeDatabase.filter(
                t => !t.completed
            );
        default:
            throw new Error(`Unknown filter: ${filter}.`);
    }
});