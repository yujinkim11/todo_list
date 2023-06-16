const TodoList = () => {

    return (
        <div className="todoAllWrap">
            <h2 className="todoTitle">To do List</h2>
            <div className="ListAllWrap">
                <div className="inputWrap">
                    <span>입력하는 창</span>
                    <button>추가</button>
                </div>
                <div className="listWrap">
                    <span>예시 리스트 1</span><button>삭제</button><br />
                    <span>예시 리스트 2</span><button>삭제</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList;