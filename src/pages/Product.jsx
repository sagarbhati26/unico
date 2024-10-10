import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const Product = () => {
  const {productId}=useParams()
  const {products}=useContext(ShopContext)
  const [productData, setProductData]=useState(false)

  const fethcProductData= async()=>{
products.map((item)=>{
if (item._id=== productId) {
  setProductData(item)
  return null 
}
})
  }
  useEffect(()=>{
fethcProductData()
  },[productId])
  return (
    <div>Product</div>
  )
}

export default Product