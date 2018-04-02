import React from "react";

const Score = ({score,stars,maxStars=5})=>(
    <div className="starbox-wrapper">
        <ul className="star-list">
            {Array.from({length:maxStars}).map((star,index)=>(<li key={index} className={`star-item${(index<(stars-1))?" act":""}`}><span className="star">{index<(stars-1)&&"★"||"☆"}</span></li>))}
        </ul>
        <span className="score">{score}</span>
    </div>
);

export default Score;