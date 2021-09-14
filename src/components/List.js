import React from 'react';
import ListItem from './ListItem';

const List = ({ products }) => {
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
          />
        );
      })}
    </div>
  );
};

export default List;
