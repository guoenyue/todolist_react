import React from "react";

const Title=({title,children})=>{
    return (
        <div className="titlebox-wrapper clearfix">
            <div className="ib-title-main">
                <span className="title-ib-icon"></span><span className="ib-title-txt">{title}</span>
            </div>
            <div className="fr">{children}</div>
        </div>
    );
}

export default Title;