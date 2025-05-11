import React from 'react'
import Prodectlist from './compnents/Prodectlist';

const Home = () => {
  return (
    <div className='w-full flex justify-center text-center flex-col items-center mt-56'>
        <h3 className='font-extrabold text-6xl p-5'>Welcome to ShoppyGlobe.<br/>
Your One-Stop Shop for Everything!
</h3>
<p className='w-1/3'>Discover a wide range of products at unbeatable prices. Shop now and enjoy amazing deals and discounts!</p>
<button className='px-5 py-2 my-2 drop-shadow-xl border-2 border-amber-50 rounded-4xl bg-blue-400 hover:bg-gray-400'>Shop Now</button>
<h3 className=' mt-64 font-extrabold text-6xl p-5 mb-10'>Our Products</h3>
<Prodectlist/>
</div>
  )
}

export default Home;