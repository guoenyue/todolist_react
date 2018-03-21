import React from "react";

import "../../css/bookitem.css";

const BookItem=({name , author , detail})=>{
    return (
            <li className="bookItem">
                <span className="bookName">{name}</span>
                <span className="author">{author}</span>
                <p className="bookDetail">{detail}</p>
            </li>
        );
};

export default BookItem;