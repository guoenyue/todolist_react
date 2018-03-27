import React ,{Component} from "react";


import ThMovie from "./ThMovieList";

class AppMovie extends Component{
    constructor(){
        super();
    }
    componentWillMount(){
    }
    render(){
        return (
            <div className="movieApp">
                <ThMovie></ThMovie>
                {/* <MovieList></MovieList> */}
            </div>
        )
    }
}

export default AppMovie;


