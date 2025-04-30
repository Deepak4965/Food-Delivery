import React, { useContext, useState } from 'react'
import {food_items} from '../food'
import Nav from '../Components/Nav'
import Categories from '../Category'
import Card from '../Card'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from 'react-icons/rx'
import AddCard from '../Components/AddCard'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Footer from './Footer'
import Header from '../Components/Header'




const Home = () => {
 
  let {cate,setCate,input,showCart,setShowCart}=useContext(dataContext)

  function filter(category){
    if(category==="All"){
      setCate(food_items)
    } else{
      let newList=food_items.filter((item)=>(item.food_category===category))
      setCate(newList)
    }
  }

let items=useSelector(state=>state.cart)

// Calculation of Total item
let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
let deliveryFee=20;
let taxes=subtotal*0.5/100;
let total=Math.floor(subtotal+deliveryFee+taxes);

 
  return (
    <div id='Home'className='w-full min-h-screen bg-[#D4D4CE]'>
         <Header />
      <Nav />
   
      
      {!input?<div
    id='order'  
    className='flex flex-wrap items-center justify-center gap-5 w-full'>
        {Categories.map((item) => {
          return <div className=' w-[130px] h-[110px] flex flex-col bg-gray-100 items-center
           justify-start gap-5 p-5 rounded-md shadow-xl text-sm text-gray-700 font-semibold 
           hover:bg-[#75aecd] cursor-pointer transition-all duration-300 ' onClick={()=>filter(item.name)}>
            {item.icon}
            {item.name}
          </div>
        })}
      </div>:null}
      

      {/* Card details */}
<div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
  {cate.length>1?cate.map((item)=>(
<Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
  )):<div className='text-[#116d9c] font-semibold text-center text-2xl pt-10'>No Dish Found</div>}

</div>
<div className={`w-full md:w-[40vw] h-full fixed top-0 right-0  bg-white shadow-xl p-6 
transition-all duration-500 flex flex-col items-center overflow-auto
  ${showCart?"translate-x-0":"translate-x-full"}`}>
  <header className='w-full flex justify-between items-center'>
<span className=' text-[ text-[18px] font-semibold'>Order items</span>
<RxCross2 className='w-[30px] h-[30px] text-[#287094] text-[18px] font-semibold cursor-pointer hover:text-gray-600' 
onClick={()=>{
  setShowCart(false)
}}/>
  </header>


  {/* AddCard Details */}
  {items.length>0?  <>
<div className='w-full mt-9 flex flex-col gap-8 '>
 {items.map((item)=>(
 <AddCard name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
 ))}
</div>
<div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
<div className='w-full flex items-center justify-between'>
  <span className='text-gray-600 font-semibold text-lg'>Subtotal</span>
  <span className='tex#287094]t-[#116d9c] font-semibold text-lg'>Rs {subtotal}/-</span>
</div>
<div className='w-full flex items-center justify-between'>
  <span className='text-gray-600 font-semibold text-lg'>Delivery Fee</span>
  <span className='text-[#116d9c] font-semibold text-lg'>Rs {deliveryFee}/-</span>
</div>
<div className='w-full flex items-center justify-between'>
  <span className='text-gray-600 font-semibold text-lg'>Taxes</span>
  <span className='text-[#116d9c] font-semibold text-lg'>Rs {taxes}/-</span>
</div>
</div>
<div className='w-full flex items-center justify-between p-9'>
  <span className='text-gray-600 font-semibold text-2xl'>Total</span>
  <span className='text-[#116d9c] font-semibold text-2xl'>Rs {total}/-</span>
</div>
<button className='w-[80%] p-3 bg-[#287094]  text-white rounded-lg hover:bg-[#7eb1dd] transition-all'
 onClick={()=>{
  toast.success("Order Placed..")
 }}>
  Place Order</button>
</>:
<div className='text-[#116d9c] font-semibold text-center text-2xl pt-10'>Empty Cart</div>}

</div>
<Footer />
    </div>
  )
}

export default Home
