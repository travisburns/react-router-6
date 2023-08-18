import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h2>Error 404: Not found.</h2>
      <h3>These are not the Droids you are looking for. </h3>
      <Link to ="/">Back Home</Link>
    </section>
  );
};
export default Error;
