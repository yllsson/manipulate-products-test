const ListItem = ({ id, name, category, price, showSimilarProducts }) => {
  return (
    <article className='listItem'>
      <h2>{name}</h2>
      <div className='listItemDetails flex'>
        <p>{category}</p>
        <p>{`£${price / 100}`}</p>
      </div>
      <button
        className='blueButton listItemButton'
        onClick={() => {
          showSimilarProducts(price);
        }}
      >
        Find similar
      </button>
    </article>
  );
};

export default ListItem;
