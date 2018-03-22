import React , { Component } from "react";

import {loadBookDetail} from "../util/fetch";


class DetailPage extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.inner.innerHTML=this.props.html;
    }
    render(){
        return (<div ref={node=>this.inner=node}></div>)
    }
}




class Book extends Component{

    constructor(){
        super();
        this.state={
            book:null,
            loadState:"loading"
        }
    }
    componentWillMount(){
        let id=this.props.match.params.id;
        this.getBookDetail(id);    
    }
    getBookDetail(id){
        if(!id){
            this.setState({
                loadState:"none"
            });
        }
        loadBookDetail(id).then(res=>{
            const data=res.showapi_res_body;
            if(!data.success){
                this.setState({
                    book:null,
                    loadState:"none"
                });
                return;
            }
            let book=data.bookDetails;
            this.setState({
                book:book,
                loadState:"loaded"
            });
        });
    }
    render(){
        const state=this.state.loadState;
        switch(state){
            case "none":
                return (<div>sorry,没有找到本章节的内容。</div>);
            case "loading":
                return (<div>当前章节正在加载中，请稍候...</div>);
            case "loaded":
                return (<div><h4>章节:{this.state.book.title}</h4><DetailPage html={this.state.book.message}></DetailPage></div>);
            default:
                return (<div>系统出错，请稍后重试！</div>);
        }
    }
}


export default Book;