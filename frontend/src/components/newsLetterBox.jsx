import React from 'react'


const newsLetterBox = () => {

const onSubmitHandler = (event) => {
    event.preventDefault();
    
  }



  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'> subscribe now & get 99% off</p>
        <p className='text-gray-400 mt-3'>hi hi hi hi</p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx'>
       <input type="email" className='w-full sm:flex-1 outline-none ' placeholder='enter your name' />
       <button type='submit' className='bg-black text white text-xs px-10 py-4'>Subscribe</button>
        </form>

      
    </div>
  )
}

export default newsLetterBox
