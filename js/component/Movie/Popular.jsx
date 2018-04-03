import React, {Component} from "react";

import Avatar from "./Avatar"; 

const CommentHeader =({})=>(
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
            <Avatar avator="http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg" name="Cynthia" txt="评论《头脑特工队》"></Avatar>
        </div>
        <div className="line-b-solid"></div>
    </div>
);

const CommentItem=()=>(
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
                <Avatar avator="http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg" name="Selba Retsu" txt="评论《欢乐好声音》"></Avatar>
                <div className="line-b-solid"></div>
            </div>
        </div>
    </li>
    // <li className="commentbox-item">
    //     <div className="commentbox-box">
    //         <div className="coverbox-wrapper">
    //             <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg" alt="欢乐好声音" className="cover"/>
    //         </div>
    //         <div className="descbox-wrapper">
    //             <h3 className="moviename">欢乐好声音</h3>
    //             <p className="desc-wrapper">
    //                 <span className="desc-txt">
    //                     为了重振剧院，考拉经理决定举办一场全世界最伟大的歌唱比赛，冠军将吧啦吧啦吧啦
    //                 </span>
    //             </p>
    //             <div className="line-b-solid"></div>
    //             <div className="avatorbox-wrapper">
    //                 <div className="avator-wrapper">
    //                     <img src="http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg" alt="" className="avator"/>
    //                 </div>
    //                 <div className="username-wrapper">
    //                     <span className="username-txt">Selba Retsu</span>
    //                 </div>
    //                 <div className="extratxt-wrapper">
    //                     <span className="extratxt-txt">评论《欢乐好声音》</span>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </li>
);

const CommentList=()=>(
    <div className="commentbox-container">
        <ul className="commentbox-list">
            {
                Array.from({length:4}).map((item,index)=>(<CommentItem key={index}></CommentItem>))
            }
        </ul>
    </div>
);




class Popular extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <CommentHeader></CommentHeader>
                <CommentList></CommentList>
            </div>
        );
    }
}

export default Popular;