import React , {Component} from "react";

const Avatar=({avator,name,txt})=>(
    <div className="avatorbox-wrapper">
        <div className="avator-wrapper">
            <img src={avator} alt="" className="avator"/>
        </div>
        <div className="username-wrapper">
            <span className="username-txt">{name}</span>
        </div>
        <div className="extratxt-wrapper">
            <span className="extratxt-txt">{txt}</span>
        </div>
    </div>
);

export default Avatar;