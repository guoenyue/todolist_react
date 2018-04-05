import React from "react";

const HotActive=({href,title,num,txt,bgColor="#00a0f3"})=>{
    let boxStyle={
        display:"inline-block",
        width:"4.56rem",
        height:"2.1333rem",
        borderRadius: "0.18rem",
        verticalAlign: "middle",
        backgroundColor:bgColor
    };
    let titleStyle={
        display: "block",
        width: "100%",
        color: "#fff",
        textAlign: "center"
    };
    let mainTitle={
        margin: "0.5333rem 0 0.1067rem",
        fontSize: 16,
        fontWeight: 600
    };
    let subTitle={
        fontSize: 12,
        color:"gray"
    };
    return (<div style={boxStyle}>
        <div style={Object.assign(mainTitle,titleStyle,)}><a href={href}>{title}</a></div>
        <div style={Object.assign(subTitle,titleStyle)}><span className="g-txt-color-white">{num}</span>{txt}</div>
    </div>)
};


const HotActives=({actives})=>{
    let _actives=actives;
    let bgColors=["#00a0f3","#F2108D"];
    return (
        <div className="banner-b-active-wrapper">
            <ul className="banner-b-active-list">
                {
                  _actives.map((item,index)=>(
                  <li key={item.id} className="banner-ib-active-item">
                        <HotActive {...item} bgColor={bgColors[index]}></HotActive>
                </li>)
                ) 
                }
            </ul>
        </div>
    );
};

export default HotActives;