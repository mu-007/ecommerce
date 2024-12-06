import React, { useContext } from 'react'

const Navbar = () => {

    const{setShowSearch, getCartCount} = useContext(ShopContext);
    const {setShowSearch} = useContext(ShopContext);

  return (
    <div>

        <img onClick={() => setShowSearch(true)} src= {assets.search_icon} className='w-5 cursor-pointer'  alt="" />

        <Link to = '/cart' className= 'relative'>
            <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>


        <Link to = '/login'><img className = 'w-5 cursor-pointer' src= {assets.profile_icon} alt="" /></Link>

      
    </div>
  )
}

export default Navbar
