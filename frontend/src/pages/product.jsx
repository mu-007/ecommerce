import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from './RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false); // 2;53
    const [image , setImage] = useState('') //
    const [size, setsSize] = useState(''); //

        const fetchProductData = async () => {

            products.map((item) =>{
                if(item._id === productId){
                    setProductData(item)
                    setImage(item.image[0])
                    return null;
                }
            })

        }

        
useEffect(() => {
    fetchProductData();
}, [productId])

return productData ? (
    <div className = 'border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/*---------------- product data-------------*/}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'></div>
        {/*------------- product images ----------------*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.75] w-full'>
                {
                    productData.image.map((item, index) =>(
                        <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                    ))
                }
            </div>
            <div className='w-full sm:w-[80%]'>
                <img className ="w-full h-auto" src= {image} alt="" />
            </div>
            {/*------------- product info ----------------*/}
            <div className='flex-1'>
                <h1 className='front-medium text-2xl mt-2'> {productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                    <img src={assets.star_icon}  alt="" className="w3 5" />
                    <img src={assets.star_icon}  alt="" className="w3 5" />
                    <img src={assets.star_icon}  alt="" className="w3 5" />
                    <img src={assets.star_icon}  alt="" className="w3 5" />
                    <img src={assets.star_dull_icon}  alt="" className="w3 5" />
                    <p className='p1-2'>(122)</p>
                </div>
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5' >{productData.description}</p>
                <div className='flex felx-col gap-4 my-8'></div>
                <p>Select Size</p>
                <div className='flex gap-2'>
                    {productData.sizes.map((item, index)=>(
                        <button onClick={() => setsSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key ={index}>{item}</button>
                    ))}
                </div>
                <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700' >ADD TO CART</button>
                <hr className='mt-8 sm: w-4/5'/>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'></div>
                <p>100% Original product.</p>
                <p>cash on delivery is available on this prodecu.</p>
                <p>Easy return and exchange policy withion 7 days.</p>
            </div>
            {/*---------description and review section------------- */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>E-commerce, or electronic commerce, is the modern way of conducting business through online platforms, revolutionizing the way people buy and sell goods and services. It allows consumers to browse and purchase products from the comfort of their homes, providing unparalleled convenience. With just a few clicks, customers can explore a wide range of products, compare prices, and complete transactions securely through digital payment systems. This seamless shopping experience saves time, reduces the hassle of traveling to physical stores, and ensures 24/7 availability. Additionally, e-commerce platforms often offer personalized recommendations, discounts, and promotions, enhancing customer satisfaction and loyalty.</p>
                    <p>For businesses, e-commerce opens doors to a global market, breaking geographical barriers and enabling them to reach customers worldwide. It is highly scalable, allowing startups and small businesses to grow rapidly without significant overhead costs. Automation in inventory management, marketing, and customer service streamlines operations and improves efficiency. Moreover, e-commerce facilitates data-driven decision-making by providing insights into customer preferences and market trends. As technology continues to advance, e-commerce is becoming an indispensable part of the modern economy, driving innovation and shaping the future of retail.</p>
                </div>
            </div>
            {/* ----------display related products -------- */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>


    </div>
) : <div className=' opacity-0'></div>
    
}
