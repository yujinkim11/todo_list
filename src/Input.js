import { useState } from "react"
import { useDispatch } from "react-redux";
import { todoAdd } from "./Redux/Action"

const Input = () => {
    const [newList, setNewList] = useState("");
    const dispatch = useDispatch();


    const inputTodo = (e) => {
        setNewList(e.target.value)
    }


    const handleClick = () => {
        const todo = {
            text: newList,
            isComplete: false,
        }
        if (newList.length == 0) { // 입력 값 없을때는 경고문
            alert('✘ 할 일을 입력 해주세요!')
        } else { // 내용 있을 때만 리스트에 추가한다
            dispatch(todoAdd(todo)); // newList 와 isComplete(초기엔 false) 전달
        }
        setNewList("")
    }


    return (
        <div className="ListAllWrap">
            <div className="inputWrap">
                <input type="text" onChange={inputTodo} value={newList}></input>
                <img className="add" alt="plus" onClick={handleClick}></img>
            </div>
        </div>
    )
}

export default Input