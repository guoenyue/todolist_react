import React , { Component } from "react";

import { loadBookList } from "../util/fetch";
import BookList from "./BookList";
import BookItem from "./BookItem";

class AppBook extends Component {
    constructor(){
        super();
        this.state={
            books:[]
        };
    }
    componentWillMount(){
        this.getBookList();
    }
    getBookList(id=null){
        loadBookList(id).then(res=>{
            this.setState({
                books:res.showapi_res_body.bookList  
            });
        });
    }

    render(){
        return (
            <BookList>
                { this.state.books.map((item,index)=>(<BookItem key={item.id} id={item.id} author={item.author} name={item.name} detail={item.summary}></BookItem>)) }
            </BookList>
        );
    }
}


export default AppBook;



