import React, { useContext, useEffect } from 'react'

const RelatedProducts = ({category, subCategory}) => {

    const RelatedProducts = ({category, subCategory}) => {
        const { product } = useContext(ShopContext);
        const [related, setRelated] = useState ([]);

        useEffect(() =>{

            if (RelatedProducts.length > 0){
                let productsCopy = prooducts.slice();
                productsCopy = productsCopy.filter((item) => category === item.category);
                productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

                setRelated(productsCopy.slice(0, 5));
            }

        }, [products])
    }


  return (
    <div className='my-24'>
        <div className='text-center text text-3xl py-2'>
            <Title text1= {'RELATED'} text2 = "PRODUCTS"/>
        </div>

        <div className=' = grid grid-cols-2 md:grid-cols-4 l:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item, index)=>(
                <ProductItem key={index} id={item._id} name = {item.name} image = {item.image}/>
            ))}

        </div>

      
    </div>
  )
}

export default RelatedProducts
