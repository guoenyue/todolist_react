import React from "react";
import { Link } from "react-router-dom";

import {addPageDownEvent,addPageUpEvent} from "../util/Event";

let panelStyle={
    position:"fixed",
    bottom:0,
    left:0,
    right:0,
    width:"100%",
    zIndex:6
};
let listStyle={
    width:"100%",
    fontSize:0,
    backgroundColor:"#fff"
};
let navItemStyle={
    display:"inline-block",
    height:"1.0667rem",
    padding:"0.1467rem 0",
    boxSizing:"border-box",
    fontSize:16,
    width:"33.33%",
    textAlign:"center",
    verticalAlign:"middle",
    backgroundColor:""
};

// let unsubscrible1=addPageDownEvent(function(){
//     console.log(1);
// });

// let unsubscrible2=addPageDownEvent(function(){
//     console.log(2);
// });

// setTimeout(unsubscrible2,5000);
// setTimeout(unsubscrible1,7000);
// setTimeout(()=>{
//     addPageDownEvent(function(){
//         console.log(3);
//     });
// },10000);

const NavBar = ()=>(
    <div style={panelStyle}>
        <ul style={listStyle}>
            <li style={navItemStyle} ><span className="iconfont">&#xe8d5;</span></li>
            <li style={navItemStyle}><Link to='/book'><span className="iconfont">&#xe603;</span></Link></li>
            <li style={navItemStyle}><Link to='/movie'><span className="iconfont">&#xe60c;</span></Link></li>
        </ul>
    </div>
);

export default NavBar;