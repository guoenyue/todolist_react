import React , { Component } from "react";
import { Link } from "react-router-dom";
import { loadBookCatalog } from "../util/fetch";

class BookCatalog extends Component{
    constructor(){
        super();
        this.state={
            book:null
        };
    }
    componentWillMount(){
        let id=this.props.match.params.id;
        this.getBookCataLog(id);
    }

    getBookCataLog(id){
        if(!id){
            this.setState({
                book:null
            });
            return;
        }
        loadBookCatalog(id).then(res=>{
            this.setState({
                book:res.showapi_res_body.bookDetails
            });
        });
    }

    render(){
        const book=this.state.book;
        if(!book)return (<div>没有找到本书</div>);
        return (
            <div>
                <img src={book.img} alt={book.name}/>
                <h3 className="bookTitle">书名：{book.name}</h3>
                <p className="bookAuthor">{book.author}</p>
                <p className="bookDesc">{book.summary}</p>
                <ul className="catalog-list">
                    {book.list.map(item=>(<li className="catalog-item" key={item.id}><Link to={`/bookdetail/${item.id}`}>{item.title}</Link></li>))}
                </ul>
            </div>
        );
    }
}

export default BookCatalog;