import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (

    <Navbar />
    <SearchBar />
    <div>
      <ToastContainer/>
    </div>
  )
}

export default App
