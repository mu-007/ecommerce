// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { shopContext } from "../context/shopContext"
import Title from "./Title"

const LeatestCollection = () => {
    const {products}=useContext(shopContext)
    const [latestProducts,setLatestProducts]=useState([])
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={'Latest'} text2={'Collection'} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing um fuga laboriosam optio dolore amet alias.
            </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cold-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
{
        latestProducts.map((items,index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name}
            price={item.price} />
        )
    )}
        </div>
      
    </div>
  )
}

export default LeatestCollection
