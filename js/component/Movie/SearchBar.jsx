import React,{Component} from "react";

// class SearchBar extends Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return (
//             <div className="searchbox banner-searchbox">
//                 <div className="ib-location"><span className="g-txt-color-white" style={{fontSize:14}}>北京</span></div>
//                 <div className="ib-searchbox-container">
//                     <input type="text" className="b-searchcontrol" placeholder={this.props.placeholder} onChange={input=>this.props.searchEvent(input.target.value)} onKeyUp={this.props.keyEvent}/>
//                 </div>
//             </div>
//         );
//     }
// }

const SearchBar=({placeholder,searchEvent,keyEvent,clickEvent,city})=>{
    let cityStyle={
        fontSize: 14,
        width: 28,
        color:"#fff",
        overflow: "hidden",
        display: "inline-block",
        height:16,
        lineHeight: "20px"
    };
    return (
    <div className="searchbox banner-searchbox">
        <div className="ib-location" onClick={clickEvent}><span className="iconfont" style={{fontSize:20,color:"#fff"}}>&#xe677;</span><span  style={cityStyle}>{city}</span></div>
        <div className="ib-searchbox-container">
                <input type="text" className="b-searchcontrol iconfont" placeholder={placeholder} onChange={(input)=>searchEvent(input.target.value)} onKeyUp={keyEvent}/>
        </div>
    </div>
)};


export default SearchBar;

