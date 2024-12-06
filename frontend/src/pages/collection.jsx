import React, { useContext, useState } from 'react'
import { shopContext } from '../context/shopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import productId from '../components/ProducItem';
const {product}=useContext(shopContext)
const [showFilter,setShowFilter]=useState(false);
const [filterProduchts,setFilterProducts]=useState([]);
const [catagory,setCatagory]=useState([]);
const [subCategory,setSubCategory]=useState([]);
const [sortType,setSortType]=useState('relevant');
const toggleCategory =(e)=>{
    if(catagory.includes(e.target.value)){
        setCatagory(prev => prev.filter(item =>item !== e.target.value))
    }
    else {
        setCatagory(prev =>[...prev,e.target.value])
    }
}

const applyFilter = () => {

    let productsCopy = products.slice();
    
    if (category.length > 0) {
    
    productsCopy = productsCopy.filter(item => category.includes (item.category));
    
    }
    
    if (subCategory.length > 0) {
    
    productsCopy = productsCopy.filter(item => subCategory.includes (item.subCategory))
    
    }
    
    setFilterProducts (productsCopy)
    
    
    
    }
    const sortProduct=() => {

        let fpCopy= filterProducts.slice();
        
        switch (sortType) {
        
        case 'low-high':
        
        setFilterProducts (fpCopy.sort((a,b)=>(a.price -b.price)));
        
        break;
        
        case 'high-low':
        
        setFilterProducts (fpCopy.sort((a,b)=>(b.price- a.price)));
        
        break;
        
        default:
        
        applyFilter();
        
        break;
        
        }}
    
    useEffect(() => {
    
    applyFilter();
    
    }, [category, subCategory])



return (

<div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

{/* Filter Options */}
<div className='min-w-60'>
<p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center'>Filter

<img className={ `h-3 sm:hidden ${showFilter? 'rotate-90': ''}`} src={assets.dropdown}/>
</p>

{/* Category Filter */}

<div className={ `border border-gray-300 p1-5 py-3 mt-6 ${showFilter?'': 'hidden'} sm:block`}>

<p className='mb-3 text-sm font-medium'>CATEGORIES</p>
</div>
</div>
<div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
<p className='flex gap-2'>
<input className='w-3' type="checkbox" value={'Men'}/> Men
</p>
<p className='flex gap-2'>
<input className='w-3' type="checkbox" value={'Women'}/> Women
</p>
<p className='flex gap-2'>
<input className='w-3' type="checkbox" value={'Kids'}/> kids</p>
</div>


{/* Right Side */}

<div className='flex-1'>

<div className='flex justify-between text-base sm:text-2x1 mb-4'>

<Title text1={'ALL'} text2={'COLLECTIONS'} />

{/* Porduct Sort */}

<select className='border-2 border-gray-300 text-sm px-2'>

<option value="relavent">Sort by: Relavent</option>

<option value="low-high">Sort by: Low to High</option>

<option value="high-low" >Sort by: High to Low</option>

</select>

</div>
{/* Map Products */}
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
</div>
</div>
</div>

)}