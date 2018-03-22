import React , { Component } from "react";
import { Link } from "react-router-dom";
import { loadBookCatalog } from "../util/fetch";
import Tab from "./common/Tab";
import "../../css/bookCatalog.css";


class Page extends Component{
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
                        <div className="bookface">
                            <img src={book.img} alt={book.name}/>
                            <h3 className="bookTitle">{book.name}</h3>
                        </div>
                        <Tab tabBars={[{text:"作者信息"},{text:"章节"},{text:"书籍简介"}]}>
                            <div className="tab-panel">
                                <p className="authorDetail">{book.author}</p>
                            </div>
                            <div className="tab-panel">
                                <ul className="catalog-list">
                                    {book.list.map(item=>(<li className="catalog-item" key={item.id}><Link to={`/bookdetail/${item.id}`}>{item.title}</Link></li>))}
                                </ul>
                            </div>
                            <div className="tab-panel">
                                <p className="bookDesc">{book.summary}</p>
                            </div>
                        </Tab>
                    </div>
                );
            default:
                return (<div>系统出错，请稍候再试！</div>);
        }
    }
};
const BookCatalog=({match})=>(
    <div className="bookCatalogPage">
        <a href="javascript:;" className="backBtn">&lt;</a>
        <Page match={match}/>
    </div>
);
export default BookCatalog;