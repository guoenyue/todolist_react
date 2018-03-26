import React from "react";
import "../../../css/loadStatus.css";

const LoadStatusBox=({status,clickEvent})=>{
    switch(status){
        case "init":
        case "loaded":
            return (<div className="statusBox load"><button className="loadMoreBtn" onClick={clickEvent}>点击加载更多...</button></div>);
        case "loading":
            return (<div className="statusBox loading">正在加载内容请稍候...</div>);
        case "end":
            return (<div className="statusBox end">已经是最底部了,没有更多内容。</div>);
        case "error":
            return (<div className="statusBox err">出了一些问题，请稍候重试！</div>);
        default:
            return null;
    }
};

export default LoadStatusBox;