import { APP,API,BOOK_API ,API_DB,MOVIE_API} from "../config";

const SYSTEM_PARAMS=`showapi_appid=${APP.appid}&showapi_sign=${APP.secret}`;

const loadBookList=(id,page=1,limit=20,type="id")=>{
    let url=`${API}${BOOK_API.bookList}`;
    let headers=new Headers();
    let config={method:"get",mode:"cors",cache:true,headers:headers};
    //,body:`{showapi_appid:${APP.appid},showapi_sign:${APP.secret}}`
    let myRequest=new Request(`${url}?${SYSTEM_PARAMS}&id=${id}`,config);
    return fetch(myRequest).then(res=>res.json());
}

const loadBookCatalog=(id)=>{
    let url=`${API}${BOOK_API.detail}`;
    let headers=new Headers();
    let config={method:"get",mode:"cors",cache:true,headers:headers};
    let myRequest=new Request(`${url}?${SYSTEM_PARAMS}&id=${id}`,config);
    return fetch(myRequest).then(res=>res.json());
}

const loadBookDetail=(id)=>{
    let url=`${API}${BOOK_API.detailPage}`;
    let headers=new Headers();
    let config={method:"get",mode:"cors",cache:true,headers:headers};
    let myRequest=new Request(`${url}?${SYSTEM_PARAMS}&id=${id}`,config);
    return fetch(myRequest).then(res=>res.json());
}

const loadTheaterMovies=()=>{
    let url=`/in_theaters`;
    let myHeaders=new Headers();
    let config={method:"get",mode:"cors",cache:true,headers:myHeaders};
    let myReauest=new Request(url,config);
    return fetch(myReauest).then(res=>res.json());
}

const loadWeeklyMovies=()=>{
    let url=`/weekly`;
    let myHeaders=new Headers();
    let config={method:"get",mode:"cors",cache:true,headers:myHeaders};
    let myReauest=new Request(url,config);
    return fetch(myReauest).then(res=>res.json());
}

const loadComingMovies=()=>{
    let url=`/coming`;
    let myHeaders=new Headers();
    let config={method:"get",mode:"cors",cache:true,headers:myHeaders};
    let myReauest=new Request(url,config);
    return fetch(myReauest).then(res=>res.json());
}

export {loadBookList, loadBookCatalog,loadBookDetail,loadTheaterMovies,loadWeeklyMovies,loadComingMovies};