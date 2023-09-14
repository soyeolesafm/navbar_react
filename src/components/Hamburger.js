import React from "react";
import {useState} from "react"


const Hamburger = () => {
    const [buttonOn, setButtonOn] = useState (false)

    const btnHandler = () => {
    setButtonOn (!buttonOn)
}
    return (
        <div className="  fixed m-auto top-6 cursor-pointer " onClick={ btnHandler } >
            <div className=  { buttonOn ? "rotate-45 ease-in-out duration-300 translate-y-1.5 translate-x-1 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " : " ease-in-out duration-300 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " } ></div>
            <div className= { buttonOn ? "ease-in-out duration-300  -translate-x-6 bg-transparent w-6 h-0.5 rounded-sm m-1 " : " ease-in-out duration-300 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " } ></div>
            <div className= { buttonOn ? " -rotate-45 ease-in-out duration-300 -translate-y-1.5 translate-x-1 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " : " ease-in-out duration-300 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " }></div>
        </div>
    )
}

export default Hamburger 