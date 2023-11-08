import React, { useEffect, useState } from 'react'
import Product from './Product';
import '../../App.css';
function ProductFeed() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);
  return (
        <div className='product_lists'>
         
          {products.map(({id, title, price, description, category, image}) => (
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image} />
          ))}

        </div>
  );
};

export default ProductFeed