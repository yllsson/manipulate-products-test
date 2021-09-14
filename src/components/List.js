import React from 'react';
import ListItem from './ListItem';

const List = ({ products, setVisibleProducts }) => {
  const showSimilarProducts = (price) => {
    let similarProducts = products.sort((a, b) => a.price - b.price);
    console.log(similarProducts);
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
            onClick={showSimilarProducts}
          />
        );
      })}
    </div>
  );
};

export default List;
