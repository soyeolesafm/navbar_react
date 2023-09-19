import React from 'react'
import {useState} from "react"
const Navbar = () => {

    const [isOpen, setIsOpen] = useState (false)
    const openMenu =() => {
        setIsOpen (!isOpen)
    }

    return (
    <nav className='flex justify-between items-center h-24 m-0 p-0 mx-auto px-4 text-white bg-slate-900 fixed w-screen ' >
        
        <h1 className= ' z-30 w-full text-3xl font-bold text-[#00df9a] ml-24 '  > LOGO </h1>
        <ul className='hidden md:flex justify-between items-center space-x-2 mr-24 ' >
            <li className='p-2 text-lg ' > 
                <a href='#red' > red </a>
             </li>
            <li className='p-2 text-lg ' > 
                <a href=' #blue '  > blue </a>
             </li>
            <li className='p-2 text-lg ' >  
                <a href=' #green '  > green </a>
            </li>
            <li className='p-2 text-lg ' > 
            <a href=' #pink '  > pink </a>
             </li>
        </ul>

        {/* burger button */}
        <div 
        className=" z-30 fixed m-auto top-9 right-10 cursor-pointer  md:hidden " 
        onClick={ openMenu }
         >
            <div className=  { isOpen ? "rotate-45 ease-in-out duration-300 translate-y-1.5 translate-x-1 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " : " ease-in-out duration-300 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " } ></div>
            <div className= { isOpen ? "ease-in-out duration-300  -translate-x-6 bg-transparent w-6 h-0.5 rounded-sm m-1 " : " ease-in-out duration-300 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " } ></div>
            <div className= { isOpen ? " -rotate-45 ease-in-out duration-300 -translate-y-1.5 translate-x-1 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " : " ease-in-out duration-300 bg-slate-50 w-6 h-0.5 rounded-sm m-1 " }></div>
        </div>
        
        <ul
         className={ isOpen? " flex h-screen flex-col justify-between items-center space-x-2  m-0 right-0 opacity-90  text-white bg-slate-900 w-full fixed z-20 top-0 md:hidden ease-in-out duration-300 " : " -translate-y-full  flex h-screen flex-col justify-between items-center space-x-2  m-0 right-0 opacity-90  text-white bg-slate-900 w-full fixed z-20 top-0 md:hidden ease-in-out duration-300 " }
                     
         >
            <li 
            className='p-2 text-lg mt-36 '
            onClick={ openMenu } 
             > 
                <a href='#red' > red </a>
             </li>
            <li 
            className='p-2 text-lg '
            onClick={ openMenu }
             > 
                <a href=' #blue '  > blue </a>
             </li>
            <li 
            className='p-2 text-lg '
            onClick={ openMenu }
             >  
                <a href=' #green '  > green </a>
            </li>
            <li 
            className='p-2 text-lg mb-24 '
            onClick={ openMenu }
             > 
            <a href=' #pink '  > pink </a>
             </li>
        </ul>
        
    </nav>
    )
}

export default Navbar