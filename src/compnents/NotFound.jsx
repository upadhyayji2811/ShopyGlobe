import React from 'react';
import notfound from '../assets/20602785_6325252.svg'

const NotFound = () => {
  return (
    <div className='bg-white w-full h-screen flex justify-center items-center'>
        <img src={notfound} width={500}  height={500}/>
    </div>
  )
}

export default NotFound