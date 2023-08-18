import { Link, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {


  return (

    <>
    <Navbar/>
    
    <section className='section'>
      <h2>Home Page</h2>
      <Outlet />
    </section>

    </>
    
  );
};
export default Home;
