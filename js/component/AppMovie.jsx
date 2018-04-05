import React ,{Component} from "react";

import SearchBar from "./Movie/SearchBar";
import HotActives from "./Movie/HotActives";
import Title from "./Movie/Title";
import HotMovie from "./Movie/HotMovie";
import Pagations from "./Movie/Pagations";
import Comment from "./Movie/Comment";
import Comming from "./Movie/Comming";
import Groom from "./Movie/Groom";
import Popular from "./Movie/Popular";

import {addPageDownEvent,addPageUpEvent} from "../util/Event";

import "../../css/movies.css";

let unsubscrible1=addPageDownEvent(function(){
    console.log(3);
});

let unsubscrible2=addPageDownEvent(function(){
    console.log(4);
});

// setTimeout(unsubscrible2,5000);
// setTimeout(unsubscrible1,7000);
// setTimeout(()=>{
//     addPageDownEvent(function(){
//         console.log(3);
//     });
// },10000);



class AppMovie extends Component{
    constructor(){
        super();
        this.touchBegin=this.touchBegin.bind(this);
        this.touchMove=this.touchMove.bind(this);
        this.touchEnd=this.touchEnd.bind(this);
    }
    componentWillMount(){
    }
    touchBegin(touchEvent){
        this.beginPos={
            x:touchEvent.clientX,
            y:touchEvent.clientY
        };
        console.log("起点",this.beginPos);
    }
    touchMove(touchEvent){
        let curPos={
            x:touchEvent.clientX,
            y:touchEvent.clientY
        };
        //console.log("在移动",curPos);
        console.log(`移动了x:${curPos.x-this.beginPos.x},y:${curPos.y-this.beginPos.y}`);
    }
    touchEnd(touchEvent){
        let endPos={
            x:touchEvent.clientX,
            y:touchEvent.clientY
        }
        console.log(`最终移动了x:${endPos.x-this.beginPos.x},y:${endPos.y-this.beginPos.y}`);
    }
    render(){
        return (
            <div className="movieApp">
                <div className="banner" onTouchStart={(e)=>this.touchBegin(e.touches[0])} onTouchMove={(e)=>this.touchMove(e.touches[0])} onTouchEnd={(e)=>console.log(e.touches)}>
                    <SearchBar placeholder="搜索" searchEvent={(val)=>console.log(val)} keyEvent={()=>{}}></SearchBar>
                    <HotActives actives={[{id:1212,href:"javascript:;",title:"热门活动",num:7,txt:"个优惠"},{id:2121,href:"javascript:;",title:"每日红包",num:13607,txt:"人已领取"}]}></HotActives>
                    <div className="line-b-solid"></div>
                </div>
                <div className="sectionbox-wrapper hotmovies-sectionbox">
                    <div className="sectionbox-g-titlebox">
                        <Title title="热门电影" iconColor="#159bfb">
                                <a href="javascript:void(0);" className="morebtn">更多 &gt;</a>
                        </Title>
                    </div>
                    <div className="sections-g-bodybox">
                        <HotMovie></HotMovie>
                    </div>
                </div>
                <div className="sectionbox-wrapper recommendedmovies-sectionbox">
                    <div className="sectionbox-g-titlebox">
                        <Title title="今日推荐" iconColor="#F2108D">
                            <Pagations actClass={"act"} actIndex={0} Count={6} Loop={false}></Pagations>
                        </Title>
                    </div>
                    <div className="sections-g-bodybox">
                        <Comment></Comment>
                    </div>
                </div>
                <div className="sectionbox-wrapper soonmovies-sectionbox">
                    <div className="sectionbox-g-titlebox">
                        <Title title="即将上映" iconColor="rgb(242,151,32)">
                                <a href="javascript:void(0);" className="morebtn">更多 &gt;</a>
                        </Title>
                    </div>
                    <div className="sections-g-bodybox">
                        <Comming></Comming>
                    </div>
                </div>
                <Groom></Groom>
                <div className="sectionbox-wrapper commentbox-sectionbox">
                    <div className="sectionbox-g-titlebox">
                        <Title title="最受欢迎影评" iconColor="rgb(12,242,251)">
                                <a href="javascript:void(0);" className="morebtn">更多 &gt;</a>
                        </Title>
                    </div>
                    <div className="sections-g-bodybox">
                        <Popular></Popular>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppMovie;


