const CreateProductPage = ({ onSubmit }) => {
  return (
    <section className='flex'>
      <form className='createProductForm flex' onSubmit={onSubmit}>
        <div className='formInputContainer'>
          <label htmlFor='productId'>Please enter unique id</label>
          <input type='text' id='productId' />
        </div>

        <div className='formInputContainer'>
          <label htmlFor='productName'>Product Name</label>
          <input type='text' id='productName' />
        </div>

        <div className='formInputContainer'>
          <label htmlFor='productCategory'>
            Product Category - meat, fish or greens
          </label>
          <input type='text' id='productCategory' />
        </div>

        <div className='formInputContainer'>
          <label htmlFor='productPrice'>Price</label>
          <input type='text' id='productPrice' />
        </div>

        <button className='blueButton' type='submit'>
          Add Product
        </button>
      </form>
    </section>
  );
};

export default CreateProductPage;
