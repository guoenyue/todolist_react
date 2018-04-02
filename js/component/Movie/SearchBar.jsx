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

const SearchBar=({placeholder,searchEvent,keyEvent})=>{
    return (
    <div className="searchbox banner-searchbox">
        <div className="ib-location"><span className="g-txt-color-white" style={{fontSize:14}}>北京</span></div>
        <div className="ib-searchbox-container">
                <input type="text" className="b-searchcontrol" placeholder={placeholder} onChange={(input)=>searchEvent(input.target.value)} onKeyUp={keyEvent}/>
        </div>
    </div>
)};


export default SearchBar;

