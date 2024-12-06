// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import shopContextProvider from './context/shopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <shopContextProvider>

   </shopContextProvider>
   
  <App />
  </BrowserRouter>,
)
