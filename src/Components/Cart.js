import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from './Head';
import { addToCart, clearCart, removeFromCart, updateQuantity } from '../utils/cartSlice';

const Cart = () => {
    const [cartData,setCartData] = useState();

    
    const cartState = useSelector((store)=>store.cart);
    // console.log(cartState);
    const dispatch = useDispatch();
    
    const additem = (item)=>{
        dispatch(addToCart(item));
        setCartData(cartState);
    }
    const updateitem = (item)=>{
        dispatch(removeFromCart(item));
        setCartData(cartState);
        console.log("clciked");
    }

    useEffect(()=>{
        setCartData(cartState);
        // console.log(cartData);
    },[cartState])
   
   

  return (<>
   <Head/>
    
   <div className=''>
   <h1 className='font-bold max-h-full ml-[33%] text-left text-2xl' >Cart</h1>
   <div className='w-1/3 ml-[33%] mr-[50%] border border-gray-300 shadow-lg'>
      
       {cartData && cartData?.cartItems.map((item)=>(
         <div key={item?.id} className='grid grid-cols-[1fr,100px,100px] grid- bg-gray-100 border shadow-md   py-6 my-4'>
          <p className='mx-2 px-6  text-sm' >{item?.name}</p>
          
          <span>
            
            <p  className='mx-2 px-2 border border-gray-300 '><button className='mx-2 text-xl ' onClick={()=>updateitem(item)} >-</button>{item.quantity}<button className='mx-2 text-xl' onClick={()=>additem(item)} >+</button></p>
            
          </span>
          <p className='mx-2 px-6 '>{item?.price/100 || item?.defaultPrice/100 }</p> 
          
        </div>
        ))}
        {cartData &&  <p>{cartData.totalQuantity}</p>}
        {cartData&&<p> Item Total:{cartState.totalAmount/100}</p>}
      </div>
      
   </div>
  </>
   
  )
}

export default Cart