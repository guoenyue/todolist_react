import React ,{Component} from "react";


import ThMovie from "./ThMovieList";

import "../../css/movies.css";

class AppMovie extends Component{
    constructor(){
        super();
    }
    componentWillMount(){
    }
    render(){
        return (
            <div className="movieApp">
                <div className="banner">
                    <div className="searchbox banner-searchbox">
                        <div className="ib-location"><span className="g-txt-colot-white" style={{fontSize:14}}>北京</span></div>
                        <div className="ib-searchbox-container">
                            <input type="text" className="b-searchcontrol" placeholder="搜索" />
                        </div>
                    </div>
                    <div className="banner-b-active-wrapper">
                        <ul className="banner-b-active-list">
                            <li className="banner-ib-active-item bg-1">
                                <div className="b-title-main b-title">热门活动</div>
                                <div className="b-title-sub b-title g-txt-colot-gray"><span className="g-txt-colot-white">7</span>个优惠</div>
                            </li>
                            <li className="banner-ib-active-item bg-2">
                                <div className="b-title-main b-title">每日红包</div>
                                <div className="b-title-sub b-title g-txt-colot-gray"><span className="g-txt-colot-white">13607</span>人已领取</div>
                            </li>
                        </ul>
                    </div>
                    <div className="line-b-solid"></div>
                </div>
                <div className="sectionbox-wrapper hotmovies-sectionbox">
                    <div className="sectionbox-g-titlebox">
                        <div className="titlebox-wrapper clearfix">
                            <div className="ib-title-main">
                                <span className="title-ib-icon"></span><span className="ib-title-txt">热门电影</span>
                            </div>
                            <div className="fr"><a href="javascript:void(0);" className="morebtn">更多 &gt;</a></div>
                        </div>
                    </div>
                    <div className="sections-g-bodybox">
                        <div className="hotmovies-wrapper">
                            <div className="hotmovies-container">
                                <ul className="hotmovies-list clearfix">
                                    <li className="hotmovies-item">
                                        <div className="hotmovies-box">
                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="moviecover" />
                                            <div className="b-descbox">
                                                <h3 className="moviename">环太平洋·Ⅱ</h3>
                                                <div className="starbox-wrapper">
                                                    <ul className="star-list">
                                                        <li className="star-item">★</li>
                                                        <li className="star-item">★</li>
                                                        <li className="star-item">★</li>
                                                        <li className="star-item">☆</li>
                                                        <li className="star-item">☆</li>
                                                    </ul>
                                                    <span className="score">8.2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppMovie;


