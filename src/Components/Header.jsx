import React, { useContext } from 'react'
import logo from '../assets/logo3.png'




import { useState } from 'react'
import { RiMenu4Line } from 'react-icons/ri';
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
                    <a href="" className='text-lg px-6 cursor-pointer hover:text-orange-500 transition-colors duration-300'>Service</a>
                    <a href="#footer" className='text-lg px-6 cursor-pointer hover:text-orange-500 transition-colors duration-300'>Contact</a>
                </div>
                <button className='block sm:hidden px-4 cursor-pointer' onClick={()=>{
                    setIsOpen(!isOpen)
                }}><CiMenuBurger size={30} /></button>
                </div>
                {/* mobile-menu */}
                <div className={`${isOpen?"block":"hidden"} cursor-pointer sm:hidden space-y-2 text-white text-md pb-3 font-semibold uppercase bg-[#db932f] py-10  mt-20 rounded-2xl `}>
                    <ul className='flex flex-col items-center justify-center gap-10'>
                    <a href="#Home" className='text-lg px-6 block cursor-pointer hover:text-orange-500 transition-colors duration-300  '>Home</a>
                    <a href="#order" className='text-lg px-6 block cursor-pointer hover:text-orange-500 transition-colors duration-300 '>Food</a>
                    <a href="" className='text-lg px-6 block cursor-pointer hover:text-orange-500 transition-colors duration-300'>Service</a>
                    <a href="#footer" className='text-lg px-6 block cursor-pointer hover:text-orange-500 transition-colors duration-300'>Contact</a>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header
