import React from 'react'

function ContatctUs() {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
            <Tittle text1= {'CONTACT'} text2 = {'US'} ></Tittle>
        </div>
        
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[480px]'  src= {assets.contact_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
                <p className='font-semibold text-xl tetx-gray-600' >Our Store</p>
                <p className='text-gray-500'>1370 Noyashorok <br />Sylhet 3100, Bangladesh</p>
                <p className='text-gray-500'>Tel: (415) 0177979797 <br /> Email: admin"forever.com</p>
            

            </div>
        </div>
      
    </div>
  )
}

export default ContatctUs
