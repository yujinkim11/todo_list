let initialState = {
    todos: []
}



const reducer = (state = initialState, action) => {
    if (action.type === "TODO_ADD") {
        return {
            todos: [...state.todos, action.todo],
        };
    } else if (action.type === "TODO_DELETE") {
        return { // 선택한 항목 id값을 빼고 재배열 해줌
            todos: [...state.todos.filter((todo) => todo.id !== action.id)],
        };
    } else if (action.type === "TODO_DONE") {
        return {
            todos: [...state.todos.map(todo => todo.id === action.id ? {
                ...todo, isDone: !todo.isDone
            } : todo)]
        }
    }
    else {
        return state;
    }
}

export default reducer;