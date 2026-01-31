import React, { useState, useMemo } from 'react';
import ProductFilter from './components/ProductFilter/ProductFilter';
import ProductList from './components/ProductList/ProductList';

const mockProducts = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: `Sản phẩm ${i + 1}`,
  price: Math.floor(Math.random() * 1000) * 1000, 
}));

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [count, setCount] = useState(0); 

  const filteredProducts = useMemo(() => {
    const start = performance.now();
    
    const result = mockProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      p.price <= maxPrice
    );

    const end = performance.now();
    console.log(`Thời gian lọc danh sách: ${(end - start).toFixed(4)}ms`);
    return result;
  }, [searchTerm, maxPrice]); 

  
  const totalPrice = useMemo(() => {
    const start = performance.now();
    
    const total = filteredProducts.reduce((sum, p) => sum + p.price, 0);

    const end = performance.now();
    console.log(`Thời gian tính tổng tiền: ${(end - start).toFixed(4)}ms`);
    return total;
  }, [filteredProducts]);

  return (
    <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      minHeight: '100vh', padding: '20px', backgroundColor: '#f4f7f6' 
    }}>
      <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', width: '500px' }}>
        <h2>Product Filter App</h2>
        
        <button onClick={() => setCount(c => c + 1)}>Render lại App ({count})</button>
        <hr />

        <ProductFilter 
          searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          maxPrice={maxPrice} setMaxPrice={setMaxPrice}
        />
        
        <ProductList products={filteredProducts} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default App;