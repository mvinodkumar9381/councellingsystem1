import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <strong>{product.name}</strong> - ${product.price}
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((cartProduct, index) => (
            <li key={index}>
              {cartProduct.name} - ${cartProduct.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;