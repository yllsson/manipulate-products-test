import React from 'react';
import ListItem from './ListItem';

const List = ({ products, setVisibleProducts }) => {
  const showSimilarProducts = (price) => {
    let sortedProducts = products.sort((a, b) => a.price - b.price);
    const priceIndex = sortedProducts
      .map((product) => product.price)
      .indexOf(price);
    console.log(price, priceIndex);

    let similarProducts = sortedProducts.slice(priceIndex - 3, priceIndex + 3);
    setVisibleProducts(similarProducts);
  };

  return (
    <div className='list flex'>
      {products.map(({ id, name, category, price }) => {
        return (
          <ListItem
            id={id}
            name={name}
            category={category}
            price={price}
            key={id}
            showSimilarProducts={showSimilarProducts}
          />
        );
      })}
    </div>
  );
};

export default List;
