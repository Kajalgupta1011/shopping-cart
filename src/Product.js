import React from 'react'
import './App.css';
function Product({id, title, price, description, category, image}) {
  return (
    <div className='product_card'>
      <div className='product-deatils'>
        <div className='product_image'>
        <img src={image} alt={title} />
      </div>
      
      <h2 className='product_title'>{title}</h2>
      <p className='product_price'>{price}$</p>
      <p className='product_description'>{description}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product