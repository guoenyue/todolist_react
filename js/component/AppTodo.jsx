import React , { Component } from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

// const todos=[{content:"我是一条todos,并且我已经完成额",completed:true},
//             {content:"我是一条todos,并且我没有完成额",completed:false}];

// const itemClick=(index)=>{
//     let tar=todos[index];
//     tar.completed=!tar.completed;
// }

// const AppTodo=()=>(
//     <TodoList>
//         {todos.map((item,index)=>(<TodoItem key={index} item={item} clickTrigger={()=>{itemClick(index)}}></TodoItem>))}
//     </TodoList>
// );

class AppTodo extends Component{
    constructor(){
        super();
        this.state={
            todos:[]
        };
        this.itemClick=this.itemClick.bind(this);
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.log=this.log.bind(this);
    }
    componentWillMount(){
        setTimeout(()=>this.setState({
            todos:[{content:"我是一条todos,并且我已经完成额",completed:true},{content:"我是一条todos,并且我没有完成额",completed:false}]
        }),2000);
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };
    itemClick(index){
        this.setState({
            todos:this.state.todos.map((item,idx)=>{if(index===idx){item.completed=!item.completed;return item;}return item;})
        });
    }
    addItem(content){
        this.setState({
            todos:[...this.state.todos,{content,completed:false}]
        });
    }
    deleteItem(index){
        this.state.todos.splice(index,1);
        this.setState({
            todos:this.state.todos
        });
    }
    log(val){
        //console.log(val);
    }
    render(){
        return (
                <div>
                    <TodoList>
                        {this.state.todos.map((item,index)=>(<TodoItem key={this.guid()} item={item} clickTrigger={()=>{this.itemClick(index)}} deleteItemEvent={()=>this.deleteItem(index)}></TodoItem>))}
                    </TodoList>
                    <AddTodo clickTrigger={this.addItem} changeTrigger={this.log}></AddTodo>
                </div>
            )
    }
}


export default AppTodo;