import React ,{Component} from "react";

import SearchBar from "./Movie/SearchBar";
import HotActives from "./Movie/HotActives";
import Title from "./Movie/Title";
import HotMovie from "./Movie/HotMovie";

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
                    <SearchBar placeholder="搜索" searchEvent={(val)=>console.log(val)} keyEvent={()=>{}}></SearchBar>
                    <HotActives actives={[{id:1212,href:"javascript:;",title:"热门活动",num:7,txt:"个优惠"},{id:2121,href:"javascript:;",title:"每日红包",num:13607,txt:"人已领取"}]}></HotActives>
                    <div className="line-b-solid"></div>
                </div>
                <div className="sectionbox-wrapper hotmovies-sectionbox">
                    <div className="sectionbox-g-titlebox">
                        <Title title="热门电影">
                                <a href="javascript:void(0);" className="morebtn">更多 &gt;</a>
                        </Title>
                    </div>
                    <div className="sections-g-bodybox">
                        <HotMovie></HotMovie>
                    </div>
                </div>
                <div className="sectionbox-wrapper recommendedmovies-sectionbox">
                    <div className="sectionbox-g-titlebox">
                        <div className="titlebox-wrapper clearfix">
                            <div className="ib-title-main">
                                <span className="title-ib-icon"></span><span className="ib-title-txt">今日推荐</span>
                            </div>
                            <div className="fr">
                                <div className="pagations-wrapper">
                                    <div className="pagations-list">
                                        <div className="pagations-item act"></div>
                                        <div className="pagations-item"></div>
                                        <div className="pagations-item"></div>
                                        <div className="pagations-item"></div>
                                        <div className="pagations-item"></div>
                                        <div className="pagations-item"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sections-g-bodybox">
                        <div className="recommendedmovies-wrapper">
                            <div className="recommendedmovies-container">
                                <ul className="recommendedmovies-list clearfix">
                                    <li className="recommendedmovies-item">
                                        <div className="recommendedmovies-box">
                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="moviecover" />
                                            <div className="b-descbox">
                                                <h3 className="moviename">环太平洋·Ⅱ</h3>
                                                <p className="actors-wrapper">
                                                    主演 ：<span className="actor-item">盖尔·加朵</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="recommendedmovies-item">
                                        <div className="recommendedmovies-box">
                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="moviecover" />
                                            <div className="b-descbox">
                                                <h3 className="moviename">环太平洋·Ⅱ</h3>
                                                <p className="actors-wrapper">
                                                    主演 ：<span className="actor-item">盖尔·加朵</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="recommendedmovies-item">
                                        <div className="recommendedmovies-box">
                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="moviecover" />
                                            <div className="b-descbox">
                                                <h3 className="moviename">环太平洋·Ⅱ</h3>
                                                <p className="actors-wrapper">
                                                    主演 ：<span className="actor-item">盖尔·加朵</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sectionbox-wrapper soonmovies-sectionbox">
                    <div className="sectionbox-g-titlebox">
                        <div className="titlebox-wrapper clearfix">
                            <div className="ib-title-main">
                                <span className="title-ib-icon"></span><span className="ib-title-txt">即将上映</span>
                            </div>
                            <div className="fr">
                                <a href="javascript:void(0);" className="morebtn">更多 &gt;</a>
                            </div>
                        </div>
                    </div>
                    <div className="sections-g-bodybox">
                        <div className="soonmovies-wrapper">
                            <div className="soonmovies-container">
                                <ul className="soonmovies-list clearfix">
                                    <li className="soonmovies-item">
                                        <div className="soonmovies-box">
                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="moviecover" />
                                            <div className="b-descbox">
                                                <h3 className="moviename">环太平洋·Ⅱ</h3>
                                                <div className="release-wrapper">
                                                    <span className="icon-clock"></span><span className="i-release-date">6月20日</span><span className="g-txt-color-gray">上映</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="soonmovies-item">
                                        <div className="soonmovies-box">
                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="moviecover" />
                                            <div className="b-descbox">
                                                <h3 className="moviename">环太平洋·Ⅱ</h3>
                                                <div className="release-wrapper">
                                                    <span className="icon-clock"></span><span className="i-release-date">6月20日</span><span className="g-txt-color-gray">上映</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="soonmovies-item">
                                        <div className="soonmovies-box">
                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="moviecover" />
                                            <div className="b-descbox">
                                                <h3 className="moviename">环太平洋·Ⅱ</h3>
                                                <div className="release-wrapper">
                                                    <span className="icon-clock"></span><span className="i-release-date">6月20日</span><span className="g-txt-color-gray">上映</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="groomblock-wrapper">
                    <div className="groomblock-container">
                        <ul className="groomblock-list">
                            <li className="groomblock-item">
                                <div className="groomblock-box">
                                    <div className="cover-wrapper">
                                        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="cover"/>
                                    </div>
                                    <div className="desc-wrapper">
                                        <div className="block-titlebox"><span className="block-title-txt">热映口碑</span></div>
                                        <div className="block-titlebox-sub"><span className="block-title-txt">摔跤吧！爸爸</span></div>
                                    </div>
                                </div>
                            </li>
                            <li className="groomblock-item">
                                <div className="groomblock-box">
                                    <div className="cover-wrapper">
                                        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="cover"/>
                                    </div>
                                    <div className="desc-wrapper">
                                        <div className="block-titlebox"><span className="block-title-txt">最受期待</span></div>
                                        <div className="block-titlebox-sub"><span className="block-title-txt">变形金刚 5大师级</span></div>
                                    </div>
                                </div>
                            </li>
                            <li className="groomblock-item">
                                <div className="groomblock-box">
                                    <div className="cover-wrapper">
                                        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="cover"/>
                                    </div>
                                    <div className="desc-wrapper">
                                        <div className="block-titlebox"><span className="block-title-txt">热映口碑</span></div>
                                        <div className="block-titlebox-sub"><span className="block-title-txt">摔跤吧！爸爸</span></div>
                                    </div>
                                </div>
                            </li>
                            <li className="groomblock-item">
                                <div className="groomblock-box">
                                    <div className="cover-wrapper">
                                        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="环太平洋·雷霆再起" className="cover"/>
                                    </div>
                                    <div className="desc-wrapper">
                                        <div className="block-titlebox"><span className="block-title-txt">最受期待</span></div>
                                        <div className="block-titlebox-sub"><span className="block-title-txt">变形金刚 5大师级</span></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sectionbox-wrapper commentbox-sectionbox">
                    <div className="sectionbox-g-titlebox">
                        <div className="titlebox-wrapper clearfix">
                            <div className="ib-title-main">
                                <span className="title-ib-icon"></span><span className="ib-title-txt">最受欢迎影评</span>
                            </div>
                            <div className="fr">
                                <a href="javascript:void(0);" className="morebtn">更多 &gt;</a>
                            </div>
                        </div>
                    </div>
                    <div className="sections-g-bodybox">
                        <div className="commentbox-wrapper">
                            <div className="b-videobox">
                                <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="" className="poster"/>
                            </div>
                            <div className="commentbox-descbox-wrapper">
                                <h3 className="moviename">头脑特工队</h3>
                                <p className="desc-wrapper">
                                    <span className="desc-txt">
                                        乐乐作为团队的领导，他协同其他伙伴致力于为小主人营造更多美好的珍贵回忆。
                                    </span>
                                </p>
                                <div className="avatorbox-wrapper">
                                    <div className="avator-wrapper">
                                        <img src="http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg" alt="" className="avator"/>
                                    </div>
                                    <div className="username-wrapper">
                                        <span className="username-txt">Cynthia</span>
                                    </div>
                                    <div className="extratxt-wrapper">
                                        <span className="extratxt-txt">评论《头脑特工队》</span>
                                    </div>
                                </div>
                            </div>
                            <div className="line-b-solid"></div>
                        </div>
                        <div className="commentbox-container">
                            <ul className="commentbox-list">
                                <li className="commentbox-item">
                                    <div className="commentbox-box">
                                        <div className="coverbox-wrapper">
                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="欢乐好声音" className="cover"/>
                                        </div>
                                        <div className="descbox-wrapper">
                                            <h3 className="moviename">欢乐好声音</h3>
                                            <p className="desc-wrapper">
                                                <span className="desc-txt">
                                                    为了重振剧院，考拉经理决定举办一场全世界最伟大的歌唱比赛，冠军将吧啦吧啦吧啦
                                                </span>
                                            </p>
                                            <div className="avatorbox-wrapper">
                                                <div className="avator-wrapper">
                                                    <img src="http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg" alt="" className="avator"/>
                                                </div>
                                                <div className="username-wrapper">
                                                    <span className="username-txt">Selba Retsu</span>
                                                </div>
                                                <div className="extratxt-wrapper">
                                                    <span className="extratxt-txt">评论《欢乐好声音》</span>
                                                </div>
                                            </div>
                                            <div className="line-b-solid"></div>
                                        </div>
                                    </div>
                                </li>
                                <li className="commentbox-item">
                                    <div className="commentbox-box">
                                        <div className="coverbox-wrapper">
                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="欢乐好声音" className="cover"/>
                                        </div>
                                        <div className="descbox-wrapper">
                                            <h3 className="moviename">欢乐好声音</h3>
                                            <p className="desc-wrapper">
                                                <span className="desc-txt">
                                                    为了重振剧院，考拉经理决定举办一场全世界最伟大的歌唱比赛，冠军将吧啦吧啦吧啦
                                                </span>
                                            </p>
                                            <div className="line-b-solid"></div>
                                            <div className="avatorbox-wrapper">
                                                <div className="avator-wrapper">
                                                    <img src="http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg" alt="" className="avator"/>
                                                </div>
                                                <div className="username-wrapper">
                                                    <span className="username-txt">Selba Retsu</span>
                                                </div>
                                                <div className="extratxt-wrapper">
                                                    <span className="extratxt-txt">评论《欢乐好声音》</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppMovie;


