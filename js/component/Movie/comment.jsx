import React,{Component} from "react";

class Comment extends Component{
    constructor(){
        super();
        this.state={
            movies:[]
        };
    }

    componentWillMount(){

    }

    render(){
        return (
            <div className="recommendedmovies-wrapper">
                <div className="recommendedmovies-container">
                    <ul className="recommendedmovies-list clearfix">
                        {
                            this.state.movies.map((movie,index)=>(
                                <li key={movie.id} className="recommendedmovies-item">
                                    <div className="recommendedmovies-box">
                                        <a href="javascript:;"><img src={movie.img} alt={movie.name} className="moviecover" /></a>
                                        <div className="b-descbox">
                                            <h3 className="moviename">{movie.name}</h3>
                                            <p className="actors-wrapper">
                                                主演 ：<span className="actor-item">{movie.actor}</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }


}


export default Comment;
