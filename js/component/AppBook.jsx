import React , { Component } from "react";

import { loadBookList } from "../util/fetch";
import BookList from "./BookList";
import BookItem from "./BookItem";

import LoadStatusBox from "./common/LoadStatusBox";

class AppBook extends Component {
    constructor(){
        super();
        this.state={
            books:[],
            loadStatus:""
        };
        this.curPage=1;
        this.loadNextPage=this.loadNextPage.bind(this);
    }
    componentWillMount(){
        this.getBookList(this.curPage);
    }
    getBookList(id=null){
        let page=this.curPage;
        loadBookList(id).then(res=>{
            if(!res.showapi_res_body.success){
                this.setState({
                    loadStatus:"error"
                });
            }
            if(res.showapi_res_body.bookList.length>0){
                this.setState({
                    books:[...this.state.books,...res.showapi_res_body.bookList],
                    loadStatus:"loaded"
                });
                this.curPage=++page;
            }else{
                this.setState({
                    loadStatus:"end"
                });
            }
        });
    }
    loadNextPage(){
        this.getBookList(this.curPage);
        this.setState(
            {loadStatus:"loading"}
        );
    }
    render(){
        const loadStatus=this.state.loadStatus;
        return (
            <div>
                <BookList>
                    { this.state.books.map((item,index)=>(<BookItem key={item.id} id={item.id} author={item.author} name={item.name} detail={item.summary}></BookItem>)) }
                </BookList>
                <LoadStatusBox status={loadStatus}  clickEvent={this.loadNextPage}/>
            </div>
        );
    }
}

 
export default AppBook;



