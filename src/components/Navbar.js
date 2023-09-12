import React from 'react'
const Navbar = () => {

    return (
    <nav className='flex justify-between items-center h-24 m-0 p-0 mx-auto px-4 text-white bg-slate-900 fixed w-screen ' >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] ml-24 ' > LOGO </h1>
        <ul className='flex justify-between items-center space-x-2 mr-24 ' >
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
    </nav>
    )
}

export default Navbar