import React from "react";

const TodoList=({children})=>(
    <ul className="todolist">
        {children}
    </ul>
);

export default TodoList;