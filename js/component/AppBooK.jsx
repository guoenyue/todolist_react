import React , { Component } from "react";
import BookList from "./BookList";
import BookItem from "./BookItem";

class AppBook extends Component {
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };
    render(){
        const books=[
            {author:"罗贯中",name:"三国演义",detail:"描述了三国时代几大枭雄争夺天下的故事。"},
            {author:"施耐庵",name:"水浒传",detail:"描述了宋代水泊梁山好汉行侠仗义替天行道最后被招安的故事。"},
            {author:"吴承恩",name:"西游记",detail:"描述了唐代玄奘师徒四人千辛万苦降妖除魔去西天取经的故事。"},
            {author:"曹雪芹",name:"红楼梦",detail:"描述了贾王薛史四大家族的纸醉金迷生活。ps:有钱真的好！！！"}
        ];

        return (
            <BookList>
                { books.map((item,index)=>(<BookItem key={this.guid()} author={item.author} name={item.name} detail={item.detail}></BookItem>)) }
            </BookList>
        );
    }
}


export default AppBook;



