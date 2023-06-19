let initialState = {
    todos: []
}



const reducer = (state = initialState, action) => {
    if (action.type === "TODO_ADD") {
        return {
            todos: [...state.todos, action.todo],
        };
    } else if (action.type === "TODO_DELETE") {
        console.log(JSON.stringify(action))
        console.log(JSON.stringify(...state.todos))
        return {
            todos: [...state.todos.filter((todo) => todo.id !== action.id)],
        };
    } else if (action.type === "TODO_DONE") {
        // console.log("완료 했을 때 todo" + JSON.stringify(...state.todos))
        // console.log("완료 했을 때 action" + JSON.stringify(action))
        return {
            // todos: [...state.todos.filter((todo) => todo.isComplete !== action.isComplete)],
            todos: [...state.todos.map(todo => todo.id === action.id ? {
                ...todo, isComplete: !todo.isComplete
            } : todo)]
        }
    }
    else {
        return state;
    }
}

export default reducer;