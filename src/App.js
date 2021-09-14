import React, { useState } from 'react';
import List from './components/List';
import products from './database/db';

import './styles/styles.css';

function App() {
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [filter, setFilter] = useState('all');

  const selectFilter = (event) => {
    let filteredProducts = [];

    if (event.target.value == 'all') {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter((product) => {
        return product.category === event.target.value;
      });
    }

    setVisibleProducts(filteredProducts);
    setFilter(event.target.value);
  };

  return (
    <div className='App flex'>
      <nav className='flex'>
        <a className='flex' href='#'>
          Home
        </a>
        <a className='flex' href='#'>
          Create Product
        </a>
      </nav>
      <main className='flex'>
        <h1>Products:</h1>

        <select value={filter} onChange={selectFilter}>
          <option value='all'>All products</option>
          <option value='meat'>Meat</option>
          <option value='fish'>Fish</option>
          <option value='greens'>Greens</option>
        </select>

        <List products={visibleProducts} />
      </main>
    </div>
  );
}

export default App;
