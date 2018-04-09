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
import Modal from "./common/Modal";

import {getPos} from "../plugin/Map";


import "../../css/movies.css";



class AppMovie extends Component{
    constructor(){
        super();
        this.touchBegin=this.touchBegin.bind(this);
        this.touchMove=this.touchMove.bind(this);
        this.touchEnd=this.touchEnd.bind(this);
        this.changeCity=this.changeCity.bind(this);
        this.closeModal=this.closeModal.bind(this);
        //this.getGPRS_Pos=this.getGPRS_Pos.bind(this);
        this.state={
            city:"定位中...",
            cityCode:null,
            showModal:false,
        };
    }
    componentWillMount(){
        this.getGPRS_Pos();
    }
    touchBegin(touchEvent){
        this.beginPos={
            x:touchEvent.clientX,
            y:touchEvent.clientY
        };
    }
    touchMove(touchEvent){
        let curPos={
            x:touchEvent.clientX,
            y:touchEvent.clientY
        };
    }
    touchEnd(touchEvent){
        let endPos={
            x:touchEvent.clientX,
            y:touchEvent.clientY
        }
    }
    getGPRS_Pos(){
        getPos(pos=>{
            let {citycode,province:city}=pos.addressComponent;
            this.setState(
                {
                    cityCode:citycode,
                    city
                }
            );
        },err=>{
            console.log("sorry,定位失败,请手动指定城市");
        });
    }

    changeCity(){
        this.setState(
            {showModal:true}
        );
        document.body.style.overflow="hidden";
        document.documentElement.style.overflow="hidden";
    }
    closeModal(){
        this.setState({
            showModal:false
        });
        document.body.style.overflow="auto";
        document.documentElement.style.overflow="auto";
    }

    render(){
        return (
            <div className="movieApp">
                <div className="banner">
                    <SearchBar placeholder="&#xe612;  电影/影院" searchEvent={(val)=>console.log(val)} keyEvent={()=>{}} city={this.state.city} clickEvent={this.changeCity}></SearchBar>
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
                <Modal clickEvent={this.closeModal} show={this.state.showModal} showCloseBtn={true}>
                    <div style={{height:1000}}>我是遮罩层内部的一个站位盒子</div>
                </Modal>
            </div>
        )
    }
}

export default AppMovie;


