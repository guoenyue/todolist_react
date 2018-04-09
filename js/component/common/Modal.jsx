import React,{Component} from "react";

const Modal = ({show,children,opaque=false,showCloseBtn=true,clickEvent})=>{
    let modalStyle={
        position:"fixed",
        left:0,
        top:0,
        right:0,
        bottom:0,
        backgroundColor:"rgb(255,255,255)",
        opacity:opaque?.5:1,
        overflow:"hidden",
        zIndex:9999,
        display:show?"block":"none"
    };
    let modalContStyle={
        position:"relative",
        width:"100%",
        height:"100%",
        minHeight:"100%",
        overflow:"auto",
    };
    let closeBtnStyle={
        position:"absolute",
        top:10,
        right:10,
        padding:10,
        fontSize:20,
        color:"###",
        display:showCloseBtn?"block":"none",
        zIndex:99999
    };
    return (
        <div style={modalStyle}>
            <span style={closeBtnStyle} onClick={clickEvent}>X</span>
            <div style={modalContStyle}>
                {children}
            </div>
        </div>
    );
}

export default Modal;