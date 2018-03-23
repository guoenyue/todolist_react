import React from "react";
//import "../../css/todo.css";
require("../../css/todo.css");


const TodoItem = ({item,clickTrigger,deleteItemEvent})=>{
    return (
    <li className="todoitem" style={{textDecoration:item.completed&&"line-through"||"none"}}>
        <span className="todoContent">{item.content}</span>
        <button style={{opacity:item.completed?0.4:1}} onClick={clickTrigger} className="completeBtn">完成</button>
        <button disabled={!item.completed} style={{opacity:item.completed?1:0.4}} onClick={(e)=>{e.stopPropagation();deleteItemEvent()}} className="deleteBtn">删除</button>
    </li>)
};

export default TodoItem;