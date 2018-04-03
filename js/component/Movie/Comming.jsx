import React,{Component} from "react";

class Comming extends Component{
    constructor(){
        super();
        this.state={
            movies:[]
        };
    }

    componentWillUnmount(){
        this.setState({

        });
    }

    render(){
        return (
            <div className="soonmovies-wrapper">
                <div className="soonmovies-container">
                    <ul className="soonmovies-list clearfix">
                        {
                            this.state.movies.map((movie,index)=>(
                                <li key={movie.id} className="soonmovies-item">
                                    <div className="soonmovies-box">
                                        <img src={movie.img} alt={movie.name} className="moviecover" />
                                        <div className="b-descbox">
                                            <h3 className="moviename">{movie.name}</h3>
                                            <div className="release-wrapper">
                                                <span className="icon-clock"></span><span className="i-release-date">{movie.date}</span><span className="g-txt-color-gray">上映</span>
                                            </div>
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

export default Comming;

