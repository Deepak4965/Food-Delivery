

import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';
// eslint-disable-next-line react/prop-types
const AddCard = ({name,image,price,id,qty}) => {
    let dispatch=useDispatch()
    // const [num, setNum] = useState("")
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex items-center justify-between'>
        <div className='w-[60%] h-full  flex gap-5 '>
            <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                <img src={image} alt="" className='object-cover ' />
            </div>
            <div className='w-[40%] h-full flex flex-col gap-3'>
                <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg'> 
                    <button 
                    onClick={()=>{
                       qty>1? dispatch(DecrementQty(id)):1
                    }}
                    className='w-[30%] h-full bg-white flex justify-center items-center text-[#116d9c]
                     hover:bg-gray-200'>-</button>
                <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center text-[#116d9c]'>{qty}</span>
                <button
                 onClick={()=>{
                    dispatch(IncrementQty(id))
                }}
                className='w-[30%] h-full bg-white flex justify-center items-center text-[#116d9c]  hover:bg-gray-200'>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-6'>
<span className='text-xl text-[#287094]'>Rs {price}/-</span>

{/* Remove Items */}
<RiDeleteBin6Line  
onClick={()=>dispatch(RemoveItem(id))}
className='w-[30px] h-[30px] text-red-500 cursor-pointer'/>
        </div>
    </div>
  )
}

export default AddCard
