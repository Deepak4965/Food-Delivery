import React, { useContext, useEffect } from 'react'
import {food_items} from '../food'
import { FaSearch } from 'react-icons/fa'
import { LuShoppingBag } from 'react-icons/lu'
import { MdFastfood } from 'react-icons/md'
import { dataContext } from '../context/UserContext'
import { useSelector } from 'react-redux'
import img from '../assets/fast.png'


const Nav = () => {
  
  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)
  useEffect(() => {
  let newlist= food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
  setCate(newlist)
  },[input])

  const submitHandler=(e)=>{
    e.preventDefault()

  }
   let items= useSelector(state=>state.cart)
   console.log(items);
   

  return (
   <>   
        <div className='w-full h-auto md:h-[80vh] flex flex-col md:flex-row'>
   <div className='flex items-center justify-center w-full md:w-[55%] h-auto md:h-[100%] p-6 md:p-0'>
       <div className='w-full md:w-[55%] flex flex-col gap-4 md:gap-6'>
           <div className='flex justify-start'>
               <p className='text-[#116d9c] text-sm md:text-base'>--FRESH & DELICIOUS--</p>
           </div>
           <div className='text-2xl md:text-4xl'>
               <p className='flex justify-start'>Delicious Meals</p>
               <p className='flex justify-start'><span className='text-orange-600 font-bold'>Delivered</span> To Your Home</p>
           </div>
           <div className=''>
               <p className='text-[#116d9c] text-sm md:text-base flex justify-start'>Enjoy Fresh, flavourful meals made with the finest ingredients,</p>
               <p className='text-[#116d9c] text-sm md:text-base flex justify-start'>delivered straight to your door, any time.</p>
           </div>
           
       </div>
   </div>



   <div className='w-full md:w-[45%] h-auto md:h-[80vh] flex items-center justify-center p-6 md:p-0'>
       <div className='w-full max-w-xs md:w-[30rem] h-auto md:h-[30rem] object-cover'>
           <img src={img} className='w-full h-[200px] object-cover rounded-lg mt-30' alt="Delicious meal" />
       </div>
   </div>
</div>
 <div className='w-full h-[100px] flex items-center justify-between px-8 md:px-8'>
<div className='  flex items-center justify-center rounded-xl shadow-xl'>
  
</div>
<form

 onSubmit={(e)=>{
  submitHandler(e)
}}
className='w-[45%] h-[60px] bg-white flex items-center px-5  ml-20 gap-5 rounded-md shadow-md md:w-[80%]'>
    <FaSearch size={20} className='text-[#287094] ' />
    <input type="text" placeholder='search your dish...' className='w-[100%] outline-none text-[16px] md:text-[20px]  '
    onChange={(e)=>setInput(e.target.value)} value={input} />
</form>
<div className='w-[60px] h-[60px] bg-white flex items-center justify-center 
rounded-xl shadow-xl relative cursor-pointer'onClick={()=>{
  setShowCart(true)
}}>
    <span className='absolute top-0 right-2 text-[#287094]  font-bold text-[1.05rem]'>{items.length}</span>
      <LuShoppingBag size={28} className='text-[#287094] '/>
</div>
</div>
</>
  )
}

export default Nav
