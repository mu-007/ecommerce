import React, { useEffect } from 'react'

const Collection = () => {

  const {products, serch, showSearch } = useContext(ShopContext);
  return (
    <div>
      
    </div>
  )
}

const applyFilter = () => {

  let productcCopy = products.slice();

  if (showSearch && search){
    productcCopy = productcCopy.filter(item => item.name.tolowerCase().includes(search.tolowerCase()) );

  }
}

useEffect(() => {
  applyFilter();
}, [category, subCategory, search, showSearch])

export default Collection
