import React from "react";
import { Link } from "react-router-dom";

import "../../css/bookitem.css";

const BookItem=({name , author , detail,id})=>{
    return (
            <li className="bookItem">
                <Link to={`/bookcatalog/${id}`}><span className="bookName">{name}</span></Link>
                <span className="author">{author}</span>
                <p className="bookDetail">{detail}</p>
            </li>
        );
};

export default BookItem;