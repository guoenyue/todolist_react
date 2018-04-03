import React ,{Component} from "react";


const GroomMovie=({movie})=>(
    <div className="groomblock-box">
        <div className="cover-wrapper">
            <img src={movie.img} alt={movie.name} className="cover"/>
        </div>
        <div className="desc-wrapper">
            <div className="block-titlebox"><span className="block-title-txt">{movie.blockTitle}</span></div>
            <div className="block-titlebox-sub"><span className="block-title-txt">{movie.name}</span></div>
        </div>
    </div>
);



class Groom extends Component{
    constructor(){
        super();
        this.state={
            movies:[]
        };
    }
    componentWillMount(){
        this.setState({
            movies:[{
                img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg",
                name:"环太平洋·雷霆再起",
                id:123112,
                blockTitle:"热映口碑"
            },{
                img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg",
                name:"变形金刚 5大师级",
                id:543534,
                blockTitle:"最受期待"
            },{
                img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg",
                name:"环太平洋·雷霆再起",
                id:6755342,
                blockTitle:"热映口碑"
            },{
                img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512933684.jpg",
                name:"变形金刚 5大师级",
                id:6545642,
                blockTitle:"最受期待"
            }]
        });
    }
    render(){
        return (
            <div className="groomblock-wrapper">
                <div className="groomblock-container">
                    <ul className="groomblock-list">
                        {
                            this.state.movies.map((movie,index)=>(
                                <li key={movie.id} className="groomblock-item">
                                    <GroomMovie movie={movie}></GroomMovie>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Groom;