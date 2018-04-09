import React,{Component} from "react";

import {loadWeeklyMovies} from "../../util/fetch";


class Comment extends Component{
    constructor(){
        super();
        this.state={
            movies:[]
        };
    }

    componentWillMount(){
        this.getMovies();
    }

    getMovies(){
        loadWeeklyMovies().then(res=>{
            this.setState({
                movies:res.subjects
            });
        });
    }

    render(){
        const len=6;
        const ulW=len*9+"rem";
        return (
            <div className="recommendedmovies-wrapper">
                <div className="recommendedmovies-container" style={{overflow:"auto"}}>
                    <ul className="recommendedmovies-list clearfix" style={{width:ulW}}>
                        {
                            this.state.movies.slice(0,6).map((movie,index)=>(
                                <li key={movie.id} className="recommendedmovies-item">
                                    <div className="recommendedmovies-box">
                                        <a href="javascript:;"><img src={movie.images.medium} alt={movie.title} className="moviecover" /></a>
                                        <div className="b-descbox">
                                            <h3 className="moviename">{movie.title}</h3>
                                            <p className="actors-wrapper">
                                                导演 ：<span className="actor-item">{movie.directors[0].name}</span>
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
