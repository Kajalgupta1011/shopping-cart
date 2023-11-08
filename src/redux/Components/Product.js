import React from 'react'
import '../../App.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../action';
function Product({id, title, price, description, category, image}) {
  const dispatch = useDispatch();

  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
  };
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
  };
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
      <button className='add_to_cart' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default Product