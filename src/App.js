import React, { useState } from 'react';
import List from './components/List';
import products from './database/db';
import CreateProductPage from './components/CreateProductPage';

import './styles/styles.css';

function App() {
  let productsClone = [...products];
  const [visibleProducts, setVisibleProducts] = useState(productsClone);
  const [filter, setFilter] = useState('');
  const [showProducts, setShowProducts] = useState(true);

  const selectFilter = (event) => {
    let filteredProducts = [];

    if (!event.target.value) {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter((product) => {
        return product.category === event.target.value;
      });
    }

    setVisibleProducts(filteredProducts);
    setFilter(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: event.target.productId.value,
      name: event.target.productName.value,
      category: event.target.productCategory.value.toLowerCase(),
      price: parseInt(event.target.productPrice.value)
    };

    visibleProducts.push(newProduct);

    setShowProducts(true);
  };

  return (
    <div className='App flex'>
      <nav className='flex'>
        <button
          className='flex'
          onClick={() => {
            setShowProducts(true);
          }}
        >
          Home
        </button>
        <button
          className='flex'
          onClick={() => {
            setShowProducts(false);
          }}
        >
          Create Product
        </button>
      </nav>
      <main className='flex'>
        <section className='topOfMain flex'>
          <h1>Products:</h1>

          <div className='filterContainer flex'>
            <h3>Filter products:</h3>
            <select value={filter} onChange={selectFilter} className='dropDown'>
              <option value=''>All products</option>
              <option value='meat'>Meat</option>
              <option value='fish'>Fish</option>
              <option value='greens'>Greens</option>
            </select>
          </div>
        </section>

        {showProducts ? (
          <List
            products={visibleProducts}
            setVisibleProducts={setVisibleProducts}
          />
        ) : (
          <CreateProductPage onSubmit={handleFormSubmit} />
        )}
      </main>
    </div>
  );
}

export default App;
