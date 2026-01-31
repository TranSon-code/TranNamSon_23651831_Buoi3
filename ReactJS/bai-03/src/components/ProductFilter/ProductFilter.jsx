import React from 'react';
import './ProductFilter.css';

function ProductFilter({ searchTerm, setSearchTerm, maxPrice, setMaxPrice }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Tìm tên sản phẩm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="price-filter">
        <label>Giá tối đa: {Number(maxPrice).toLocaleString()}đ</label>
        <input
          type="range"
          min="0"
          max="1000000"
          step="10000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ProductFilter;