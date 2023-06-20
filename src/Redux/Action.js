const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TODO_DONE = "TODO_DONE";

let id = 1;

export const todoAdd = (todo) => {
    return {
        type: TODO_ADD,
        todo: {
            id: id++,
            text: todo.text,
            isDone: todo.isDone,
        },
    };
};

export const todoDelete = (id) => {
    return {
        type: TODO_DELETE,
        id,
    };
};

export const todoDone = (id) => {
    return {
        type: TODO_DONE,
        id,
    };
};
