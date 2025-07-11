
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'

import { IoIosMail } from 'react-icons/io'

const Footer = () => {
  return (
    <div id='footer' className='bg-[#287094] w-full mt-10'>
        <div className='flex flex-col md:flex-row md:items-start md:justify-between px-12 py-8 gap-8 md:gap-0'>
            <div className='md:w-[50%] flex flex-col gap-6'>
                <div>
                    <h1 className='text-2xl font-semibold text-black '>Contact</h1>
<span className='text-lg flex items-center gap-2 mt-3'><FaPhoneAlt  size={20}/>Phone : +91-9821664965</span>
<span className='text-lg flex items-center gap-2 mt-3'><IoIosMail  size={20}/>Email:dc1412592@gmail.com</span>
                </div>
            
            <div className='text-2xl flex gap-5'>
<FaGithub size={30} />
<FaLinkedin  size={30}/>

            </div>
        </div>
      <div className='md:w-[50%] flex flex-col justify-between items-center'>
        <h2  className='text-xl font-semibold pb-6'>Terms & Condition</h2>
        <div className='text-base text-gray-900 space-y-2'>
<p className='text-md'>Terms of Use</p>
        <p className='text-md'>Policies</p>
        <p className='text-md'>Code of Contact</p>
        <p className='text-md'>Privacy</p>
        </div>
        </div>
      </div>
      <div className='text-xl w-full text-center py-5'>
        <p>© 2025 Master Chief. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
