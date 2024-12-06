import React, { useState } from 'react'
import CartTotal from '../components/CartTotal'

function PlaceOrder() {

    const [method, setMethod] = useState('cod');
    const {nevigate} = useState(ShopContext);
  return (
    <div className='flex flex-col sm: flex-row justify-between gap-4 pt-5 sm: pt-14 min-h-[80vh] border-t'>
        <div className=' flex flex-col gap-4 w- full sm : max-w-[480px]'>
            <div className='text-xl sm: text-2xl my-3'>
                <TItle text1 = {'DELIVERY'}  text2 = {'INFORMATION'} />
            </div>
            <div className='flex gap-3'>
                <input className = 'border border-gray-300 rounded py-1.5 px- 3.5 w-full ' type="text" placeholder='First name' />
                <input className = 'border border-gray-300 rounded py-1.5 px- 3.5 w-full ' type="text" placeholder='Last name' />
            </div>
            <input className = 'border border-gray-300 rounded py-1.5 px- 3.5 w-full ' type="email" placeholder='Email address' />
            <input className = 'border border-gray-300 rounded py-1.5 px- 3.5 w-full ' type="text" placeholder='Street' />
            
            <div className='flex gap-3'>
                <input className = 'border border-gray-300 rounded py-1.5 px- 3.5 w-full ' type="text" placeholder='City' />
            </div>

            <div className='flex gap-3'>
                <input className = 'border border-gray-300 rounded py-1.5 px- 3.5 w-full ' type="number" placeholder='Phone' />
            </div>
        </div>

        {/* ---------------right side ----------------- */}

        <div className='mt-8'>
            <div className='mt-8 min-w-80'>
                <CartTotal/>
            </div>

            <div className='mt-12'>
                <TITLE text1= {'PAYMENT'} text2 = {'METHIOD'} />
                {/*-----------PAYMENT METHOD SELECT--------------*/}
                <div className='flex gap-3 flex-col lg: flex-row'>
                    <div onClick= {() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
                        <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                        <img className='h-5 mx-4' src= {assets.stripe_logo} alt="" />
                    </div>
                    <div onClick= {() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
                        <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                        <p className='text-grey-500 text-sm: font-medium mx-4'>CASH ON DELIVERY</p>
                    </div>
                </div>

                <div>
                    <button onClick = {() => navigate ('/orders')} className='bg-black text-white px-16 py-13 text-sm'  >PLACE ORDER</button>
                </div>
                
            </div>
        </div>

      
    </div>
  )
}

export default PlaceOrder
