import React , { Component } from "react";
import {loadTheaterMovies} from "../util/fetch";

import "../../css/movies.css";


class ThMovie extends Component{
    constructor(){
        super();
        this.state={
            movies:[],
            title:"",
            total:0
        };
    }

    componentWillMount(){
        loadTheaterMovies().then(res=>this.setMovies(res));
    }

    setMovies(data){
        this.setState({
            movies:data.subjects,
            title:data.title,
            total:data.total
        });
    }

    render(){
        return (
            <div className="thMoviesList">
                {this.state.movies.map((movie,index)=>{
                    return (
                        <div key={movie.id}  className="thMoviesItem clearfix">
                            <img src={movie.images.small} alt={movie.title} className="cover" />
                            <div className="thMovieDetail">
                                <span className="movieName">{movie.title}</span>
                            </div>
                        </div>
                    );   
                })}
            </div>
        );
    }
}

export default ThMovie;