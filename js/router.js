import React from "react";
import { BrowserRouter , HashRouter , Route , Link ,Switch,Redirect  } from "react-router-dom";

import NavBar from "./component/NavBar";
import AppTodo from "./component/AppTodo";
import AppBook from "./component/AppBook";
import Book from "./component/BookDetail";
import BookCatalog from "./component/BookCatalog";




const MyPage = ({match})=>{
    return (
        <div>
            <HashRouter>
                <div>
                    <NavBar></NavBar>
                    <Switch>
                        <Route exact path="/todo" component={AppTodo} ></Route>
                        <Route  path="/bookcatalog/:id" component={BookCatalog} ></Route>
                        <Route  path="/bookdetail/:id" component={Book} ></Route>
                        <Route  path="/book" component={AppBook} exact ></Route>
                        <Redirect path="/" to={{pathname: '/book'}} exact/>
                    </Switch>
                </div>
            </HashRouter>
        </div>
    );
};

export { MyPage };