// import React from 'react'
import { Routes,Route } from 'react-router-dom'
import about from './pages/about'
import cart from './pages/cart'
import collection from './pages/collection'
import home from './pages/home'
import contact from './pages/contact'
import login from './pages/login'
import order from './pages/order'
import placeOrder from './pages/placeOrder'
import product from './pages/product'
import NavBar from './components/NavBar'
import footer from './components/footer'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar/>
      <Routes>
      <Route path="/about" element={about} />
          <Route path="/cart" element={cart } />
          <Route path="/collection" element={collection } />
          <Route path="/" element={home } />
          <Route path="/contact" element={contact } />
          <Route path="/login" element={login } />
          <Route path="/order" element={order } />
          <Route path="/placeOrder" element={placeOrder } />
          <Route path="/product/:productId" element={product } />

      </Routes>
      <footer/>
      
    </div>
  )
}

export default App
