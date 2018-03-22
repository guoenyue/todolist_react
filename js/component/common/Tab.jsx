import React , { Component } from "react";

class Tab extends Component{
    constructor(){
        super();
        this.state={
            activePanel:0
        };
        this.tabEvent=this.tabEvent.bind(this);
    }
    tabEvent(index){
        this.setState({
            activePanel:index
        });
    }
    render(){
        const actBtnIndex=this.state.activePanel;
        return (
        <div>
            <ul className="tabs">
                {this.props.tabBars.map((item,index)=>(<li className={actBtnIndex===index?"tabs-btn act":"tabs-btn"} key={index} onClick={()=>this.tabEvent(index)}>{item.text}</li>))}
            </ul>
            {this.props.tabBars.map((item,index)=>(<div style={{display:actBtnIndex===index?"block":"none"}} key={index}>{this.props.children[index]}</div>))}
        </div>);
    }
}


export default Tab;