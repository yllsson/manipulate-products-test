const ListItem = ({ id, name, category, price }) => {
  return (
    <article className='listItem'>
      <h2>{name}</h2>
      <div className='listItemDetails flex'>
        <p>{category}</p>
        <p>{`£${price / 100}`}</p>
      </div>
      <button className='blueButton listItemButton'>More</button>
    </article>
  );
};

export default ListItem;
