import React , { Component } from "react";

import {loadTheaterMovies} from "../../util/fetch";

import Score from "./Score";

class HotMovie extends Component{
    constructor(){
        super();
        this.hotMovies=[];
        this.state={
            movies:[]
        };
    }
    componentWillMount(){
        this.getHotMovies();
    }
    getHotMovies(){
        loadTheaterMovies().then(res=>this.setMovies(res.subjects));
    }
    setMovies(movies){
        this.setState({
            movies
        });
    }
    render(){
        const len=this.state.movies.length;
        const ulW=len*3.04+"rem";
        return (
            <div className="hotmovies-wrapper">
                <div className="hotmovies-container">
                    <ul className="hotmovies-list clearfix" style={{width:ulW}}>
                        {
                            this.state.movies.map((movie,index)=>{
                                return (
                                    <li key={movie.id} className="hotmovies-item">
                                        <div className="hotmovies-box">
                                            <a href={movie.alt}><img src={movie.images.small} alt="movie.title" className="moviecover" /></a>
                                            <div className="b-descbox">
                                                <h3 className="moviename"><a href={movie.alt}>{movie.title}</a></h3>
                                                <Score score={movie.rating.average} stars={Math.round((movie.rating.stars/100)*10)}></Score>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

}

export default HotMovie;