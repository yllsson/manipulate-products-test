import React from 'react';
import products from '../database/db';
import ListItem from './ListItem';

const List = () => {
  const aFewTestProducts = products.slice(0, 24);

  return (
    <div className='list flex'>
      {aFewTestProducts.map(({ id, name, category, price }) => {
        return (
          <ListItem
            id={id}
            name={name}
            category={category}
            price={price}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default List;
