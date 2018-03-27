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
                <div className="banner">
                    <div className="topSearchBox">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default AppMovie;


