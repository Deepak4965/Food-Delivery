
import { GiChickenOven } from 'react-icons/gi'
import { LuLeafyGreen } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import { AddItem } from './redux/cartSlice'
import { toast } from 'react-toastify'

// eslint-disable-next-line react/prop-types
const Card = ({name,image,price,type,id}) => {
  let dispatch=useDispatch()
  return (
    <div id='order'className='w-[300px] h-[350px] bg-white p-3 rounded-lg flex flex-col gap-3  hover:border-2 border-[#2594cb] cursor-pointer '>
      <div className='w-full h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt=""  className='object-cover'/>
      </div>
      <div className='text-2xl font-semibold'>{name}</div>
      <div className='w-full flex items-center justify-between'>
        <div className='text-[#287094] font-semibold text-lg'>Rs {price}/-</div>
        <div className='flex items-center justify-center gap-2 text-[#287094] font-semibold text-lg'>
         {type==="veg"?<LuLeafyGreen />:<GiChickenOven />}<span>{type}</span></div>
      </div>
<button 
onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}));
toast.success(name+'  Added')}}
className='w-full p-3 bg-[#287094]  text-white rounded-lg hover:bg-[#287094] transition-all'>
  Add to dish</button>
    </div>
  )
}

export default Card
