import React from "react";
import "../../css/addtodo.css";

const AddTodo = ({changeTrigger,clickTrigger})=>{
    let input;
    return  (
        <div className="addTodoPanel">
            <input ref={node=>input=node}  onChange={()=>changeTrigger(input.value)} className="todoInput"/>    
            <button type="button" onClick={()=>{if(input.value.trim()==="")return;clickTrigger(input.value);input.value="";}} className="addTodoBtn">点击我添加一条todo</button>
        </div>
    );
};


export default AddTodo;