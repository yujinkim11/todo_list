import { useSelector } from "react-redux";
import Input from "./Input";
import ListItem from "./ListItem";

const TodoList = () => {
    // 여기서 저장된 값을 뿌려와서 넘겨준다 
    const todos = useSelector((state) => state.todos);

    return (
        <div className="background">
            <div className="todoAllWrap">
                <h2 className="todoTitle">To do List</h2>
                <Input />
                {todos.map((todo) => (<ListItem key={todo.id} todo={todo} />))}
            </div>
        </div>
    )
}

export default TodoList;