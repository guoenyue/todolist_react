import React from "react";

const Title=({title,children,iconColor="#159bfb"})=>{
    let ibStyle={
        display: "inline-block"
    };
    let iconStyle={
        width: "0.1333rem",
        height: "0.6667rem",
        marginRight: "0.5333rem",
        verticalAlign: "middle",
        borderRadius:"0.0533rem",
        backgroundColor:iconColor
    };
    let txtStyle={
        fontSize: 20,
        color:"#fff",
        fontWeight:600,
        verticalAlign: "middle"
    };
    return (
        <div className="titlebox-wrapper clearfix">
            <div style={ibStyle}>
                <span style={Object.assign(iconStyle,ibStyle)} ></span><span style={Object.assign(txtStyle,ibStyle)}>{title}</span>
            </div>
            <div className="fr">{children}</div>
        </div>
    );
}

export default Title;