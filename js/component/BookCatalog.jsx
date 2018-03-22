import React , { Component } from "react";
import { Link } from "react-router-dom";
import { loadBookCatalog } from "../util/fetch";

class BookCatalog extends Component{
    constructor(){
        super();
        this.state={
            book:null,
            loadState:"loading"
        };
    }
    componentWillMount(){
        let id=this.props.match.params.id;
        this.getBookCataLog(id);
    }

    getBookCataLog(id){
        if(!id){
            this.setState({
                book:null,
                loadState:"none"
            });
            return;
        }
        loadBookCatalog(id).then(res=>{
            const data=res.showapi_res_body;
            if(!data.success){
                this.setState({
                    book:null,
                    loadState:"none"
                });
                return;
            }
            this.setState({
                book:data.bookDetails,
                loadState:"loaded"
            });
        });
    }

    render(){
        const book=this.state.book;
        const state=this.state.loadState;

        switch(state){
            case "loading":
                return (<div>正在加载中...</div>);
            case "none":
                return (<div>没有找到本书</div>);
            case "loaded":
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
            default:
                return (<div>系统出错，请稍候再试！</div>);
        }
    }
}

export default BookCatalog;