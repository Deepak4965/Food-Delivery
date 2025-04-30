import React, { useContext } from 'react'
import logo from '../assets/logo1.png'
import { RiMenu4Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


import { useState } from 'react'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    

    return (
        <>
            <nav className='flex flex-wrap items-center justify-between w-full h-[120px] px-4 md:px-8 relative '>
                <div id='img' className='flex items-center justify-center h-[120px] w-full md:w-[25%]'>
                    <img src={logo} alt="logo" className='h-[90px] w-[155px] md:h-[90px] md:w-[155px] max-w-full' />

                </div>
                <div id="center" className={`md:h-auto h-[100px] w-full md:w-[50%] md:flex md:justify-center md:items-center ${menuOpen ? 'block' : 'hidden'} text-[20px] flex absolute md:static top-[120px] left-0 md:top-auto md:left-auto bg-white md:bg-transparent shadow-md md:shadow-none z-50 md:z-auto`}>
                    
                    <ul className='flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-4 md:p-0'>
                        <li  className='cursor-pointer hover:text-orange-500 transition-colors duration-300'><a href="#Home">Home</a></li>
                        <li  className='cursor-pointer hover:text-orange-500 transition-colors duration-300'><a href="#order">Food</a></li>
                        <li  className='cursor-pointer hover:text-orange-500 transition-colors duration-300'><a href="">Services</a></li>
                        <li  className='cursor-pointer hover:text-orange-500 transition-colors duration-300'><a href="#footer">Contact</a></li>
                    </ul>
                
                
               
                   
                    <div id='resicon' className='flex items-center ml-auto text-3xl md:hidden cursor-pointer'>
                        <h1 className='' onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}><RiMenu4Line /></h1>
                        <h1><CgProfile /></h1>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Header