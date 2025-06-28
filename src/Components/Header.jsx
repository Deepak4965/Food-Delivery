import React, { useContext } from 'react'
import logo from '../assets/logo3.png'
import {motion} from 'framer-motion'
import { useState } from 'react'

import { CiMenuBurger } from 'react-icons/ci';


const Header = () => {
 const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <nav>
                <div className='flex items-center justify-between'>
                    {/* logo */}
                    <div id='img' className='flex items-center justify-center pt-8 h-[120px] w-full md:w-[25%]  '>
                        <img src={logo} alt="logo" className='h-[150px] w-[165px] md:h-[250px] md:w-[165px] object-cover max-w-full mt-30' />

                    </div>
                     {/* desktop-menu */}
                <div className='hidden sm:block cursor-pointer '>
                    <a href="#Home" className='text-lg px-6 cursor-pointer hover:text-orange-500 transition-colors duration-300'>Home</a>
                    <a href="#order" className='text-lg px-6 cursor-pointer hover:text-orange-500 transition-colors duration-300'>Food</a>
                
                    <a href="#footer" className='text-lg px-6 cursor-pointer hover:text-orange-500 transition-colors duration-300'>Contact</a>
                </div>
                <button className='block sm:hidden px-4 cursor-pointer' onClick={()=>{
                    setIsOpen(!isOpen)
                }}><CiMenuBurger size={30} /></button>
                </div>
                {/* mobile-menu */}
                <motion.div
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-100}}
                transition={{duration:0.3}}
                
                
                className={`${isOpen?"block":"hidden"} cursor-pointer sm:hidden space-y-2 shadow-xl text-md pb-3 font-semibold uppercase bg-white py-8 mt-20 rounded-md `}>
                    <ul className='flex flex-col items-start justify-center gap-10'>
                    <a href="#Home" className='text-lg px-6 block cursor-pointer hover:text-orange-500 transition-colors duration-300  '>Home</a>
                    <a href="#order" className='text-lg px-6 block cursor-pointer hover:text-orange-500 transition-colors duration-300 '>Food</a>
                    
                    <a href="#footer" className='text-lg px-6 block cursor-pointer hover:text-orange-500 transition-colors duration-300'>Contact</a>
                    </ul>
                </motion.div>
            </nav>

        </>
    )
}

export default Header
