import { useDispatch } from "react-redux";
import { todoDelete, todoDone } from "./Action";

const ListItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { id, text, isComplete } = todo;

    const handleCheck = () => {
        dispatch(todoDone(id));
    }

    const handleDelete = () => {
        dispatch(todoDelete(id));
    }


    return (
        <div className="listWrap">
            <div className={`list ${isComplete ? 'done' : ''}`}>
                <img className="check" onClick={handleCheck} />
                <span>{text}</span>
                <img className="delete" onClick={handleDelete} />
            </div>
        </div>
    )
}

export default ListItem