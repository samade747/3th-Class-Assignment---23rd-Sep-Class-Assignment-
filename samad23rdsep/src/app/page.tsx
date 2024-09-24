import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Parent from '../components/Parent';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <Parent />
      <Footer />
    </div>
  );
};

export default Home;