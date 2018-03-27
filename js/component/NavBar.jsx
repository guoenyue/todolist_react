import React from "react";
import { Link } from "react-router-dom";


const NavBar = ()=>(
    <div className="navPanel">
        <ul className="navList">
            <li className="navItem"><Link to='/todo'>TODOAPP</Link></li>
            <li className="navItem"><Link to='/book'>BOOKLIST</Link></li>
            <li className="navItem"><Link to='/movie'>MOVIE</Link></li>
        </ul>
    </div>
);

export default NavBar;