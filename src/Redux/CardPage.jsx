import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './Slice';




const CardPage = () => {

   const cartItems=useSelector(state=>state.firstSlice.cartItems);

const dispatch=useDispatch();

  const total= cartItems.reduce((accu,item)=>accu+item.quantity*item.price,0)
  return (
    <div>
      <div className='flex justify-center pt-12'>
       <div className='border-2 w-[250px] h-[80px] rounded-2xl bg-orange-100 pt-4  '>
              <h2 className='text-xl text-blue-900 text-center '>
                Total:₹{total}
              </h2>
            </div>
            </div>
      <div>
       {cartItems.length==0?(<div><h2>Cart is Empty....</h2></div>)
       :
       (<div>
         <div className='grid grid-cols-2 justify-items-center gap-[100px] pt-[100px]'>
          {cartItems.map((item)=>{
              return(
                <div key={item.id}>
                <div >
                  <div className="flex flex-row justify-between w-[300px] ">
                    <img className='w-[200px] h-200px ' src={item.image} alt="unable to load" />
                    <p>Qty:{item.quantity}</p>
                  </div>
                  <div className='pt-3'>
                    <h3 className='text-md truncate w-[350px] h-[20px]'>{item.title}</h3>
                    
                    </div> 
                        <div className="flex flex-row gap-[50px] w-[250px] h-[50px] pt-3 justify-between ">
                          <h2>₹{item.price}</h2>
                          <button className="border border-green-900 bg-red-500 text-white rounded cursor-pointer" onClick={()=>dispatch(removeFromCart(item.id))}>Remove from Cart</button>
                        </div>
                </div>
                </div>
              )
          })}
         </div>
        
       </div>)}

           
        
      </div>
    </div>
  )
}

export default CardPage;
