import React from "react";

const Pagations=({actClass="act",actIndex=0,Count,Loop=false})=>(
    <div className="pagations-wrapper">
        <div className="pagations-list">
            {
                Array.from({length:Count}).map((item,index)=>(
                    <div key={index} className={"pagations-item"+(index==actIndex?` ${actClass}`:"")}></div>
                ))
            }
        </div>
    </div>
);


export default Pagations;