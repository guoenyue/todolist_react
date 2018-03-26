import React from "react";

const BookList=({children})=>(
        <ul className="bookList">
            {children}
        </ul>
    );

export default BookList;