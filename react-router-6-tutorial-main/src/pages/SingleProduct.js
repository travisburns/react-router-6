import {Link, useParams} from 'react-router-dom'


const SingleProduct = () => {
 const {productId} = useParams()
  return (
    <section className='section product'>
      <div className='flex'>
      <h4>{productId}</h4>
      <h4>{productId}</h4>
      <h4>{productId}</h4>
      <h4>{productId}</h4>
      </div>
      <Link to="/products">Back to products</Link>
    </section>
  );
};

export default SingleProduct;
