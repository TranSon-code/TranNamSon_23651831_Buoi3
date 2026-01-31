import React from 'react';
import './ProductList.css';

function ProductList({ products, totalPrice }) {
  return (
    <div className="list-container">
      <h3>Tổng tiền: <span className="total-price">{totalPrice.toLocaleString()}đ</span></h3>
      <p>Hiển thị: {products.length} sản phẩm</p>
      <ul className="product-items">
        {products.map(p => (
          <li key={p.id}>
            {p.name} - <strong>{p.price.toLocaleString()}đ</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;