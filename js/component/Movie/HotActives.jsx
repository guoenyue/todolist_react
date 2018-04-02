import React from "react";

const HotActives=({actives})=>{
    let _actives=actives;
    return (
        <div className="banner-b-active-wrapper">
            <ul className="banner-b-active-list">
                {
                  _actives.map((item,index)=>(
                  <li key={item.id} className={`banner-ib-active-item bg-${(index+1)}`}>
                    <div className="b-title-main b-title"><a href={item.href}>{item.title}</a></div>
                    <div className="b-title-sub b-title g-txt-color-gray"><span className="g-txt-color-white">{item.num}</span>{item.txt}</div>
                </li>)
                ) 
                }
            </ul>
        </div>
    );
};

export default HotActives;