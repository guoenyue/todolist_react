import React from "react";
import { Link } from "react-router-dom";
import ReactCssTransitionGroup from "react-addons-css-transition-group";

import "../../css/bookitem.css";

const BookItem=({name , author , detail,id})=>{
    return (
            <li>
                <div className="bookItem">
                    <ReactCssTransitionGroup transitionAppear={true} transitionAppearTimeout={1000} transitionName="fadeIn" transitionEnter={true} transitionEnterTimeout={4000} transitionLeave={true} transitionLeaveTimeout={1000}>
                            <Link to={`/bookcatalog/${id}`} className="linktxt"><span className="bookName">{name}</span></Link>
                            <span className="author">{author}</span>
                            <p className="bookDetail">{detail}</p>
                    </ReactCssTransitionGroup>
                </div>
            </li>
        );
};

export default BookItem;