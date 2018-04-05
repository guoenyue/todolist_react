let downEvent=null;
let upEvent=null;
let downEvents=null;
let upEvents=null;
let pageEvent={
    down(range){
        let winH=document.body.clientHeight||document.body.scrollHeight||document.documentElement.scrollHeight;
        let screenH=window.outerHeight;
        typeof downEvent=="function"&&downEvent(range,winH,screenH);
        if(downEvents instanceof Array&&downEvents.length>0){
            for(let i=0,eve;eve=downEvents[i++];){
                typeof eve=="function"&&setTimeout(()=>eve(range,winH,screenH),0);
            }
        }
    },
    up(range){
        typeof upEvent=="function"&&upEvent(range,winH,screenH);
        if(upEvents instanceof Array&&upEvents.length>0){
            for(let i=0,eve;eve=upEvents[i++];){
                typeof eve=="function"&&setTimeout(()=>eve(range,winH,screenH),0);
            }
        }
    }
};
let pageScrollDirection="down";
let pageTop=0;
function pageScrollEvent(e){
    e=e||window.event;
    let oTar=e.target||e.srcElement;
    let scrollObj=oTar.scrollingElement;
    let scrollRange=scrollObj.scrollTop;
    let direction="down";
    switch(scrollRange-pageTop>0){
        case true:
            direction="down";
            pageTop=scrollRange;
        break;
        case false:
            direction="up";
            pageTop=scrollRange;
        break;
        default:
        break;
    }
    typeof pageEvent[direction] =="function"&&pageEvent[direction](pageTop);
}

function addPageDownEvent(fn){
    if(typeof fn!="function")return function(){};
    downEvents=downEvents&&[...downEvents,fn]||[fn];
    return function(){
        let tmpArr=[];
        for(let i=0;i<downEvents.length;i++){
            downEvents[i]!=fn&&(tmpArr[tmpArr.length]=downEvents[i]);
        }
        downEvents=[...tmpArr];
        tmpArr=null;
    }
};

function addPageUpEvent(fn){
    if(typeof fn!="function")return function(){};
    upEvents=upEvents&&[...upEvents,fn]||[fn];
    return function(){
        let tmpArr=[];
        for(let i=0;i<upEvents.length;i++){
            upEvents[i]!=fn&&(tmpArr[tmpArr.length]=upEvents[i]);
        }
        upEvents=[...tmpArr];
        tmpArr=null;
    }
}


document.addEventListener("scroll",(e)=>pageScrollEvent(e));


export { downEvent,upEvent,addPageDownEvent,addPageUpEvent };