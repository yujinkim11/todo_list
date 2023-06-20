import { useDispatch } from "react-redux";
import { todoDelete, todoDone } from "./Redux/Action";

const ListItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { id, text, isDone } = todo;

    const handleCheck = () => {
        // 완료 선택된 항목 id
        dispatch(todoDone(id));
    }

    const handleDelete = () => {
        // 삭제 선택된 항목 id 
        dispatch(todoDelete(id));
    }


    return (
        <div className="listWrap">
            <div className={`list ${isDone ? 'done' : ''}`}>
                <img className="check" alt="checkBox" onClick={handleCheck} />
                <span>{text}</span>
                <img className="delete" alt="delete" onClick={handleDelete} />
            </div>
        </div>
    )
}

export default ListItem;