import React from 'react'
import star from "../assets/star.svg"
import { useDispatch, useSelector } from "react-redux"
import {RemoveItem} from "../redux/CartSlice"

const CartItem = ({product}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
    return (
        <div className=' w-1/3 m-10 h-fit text-left bg-white rounded-3xl px-8 py-4 hover:border-2 border-emerald-300'>
            <img src={product.images} />
            <div className='px-2'>
                <p className='font-bold py-2'>{product.title}</p>
                <div className='flex flex-row justify-between'>
                    <span className='flex flex-row gap-2'>
                        <p>{product.rating}</p>
                        <img src={star} height={20} width={20} />
                    </span>
                    <span>
                        <p>₹ {Math.trunc(product.price * 80)}</p>
                    </span>
                </div>
                <p className='text-gray-700 font-bold'>{product.category}</p>
            </div>
            <div className='w-full flex flex-row gap-2 mt-4'>
                <button onClick={()=>{
                    dispatch(RemoveItem(product));
                }} className='w-2/3 border-2 border-amber-900 rounded-2xl px-1 py-1 hover:bg-blue-400 hover:text-white'>Remove</button>
                <button className='w-1/3 border-2 border-amber-900 rounded-2xl px-2 py-2 font-bold hover:bg-blue-400 hover:text-white'>Buy</button>
            </div>
        </div>
    )
}


export default CartItem