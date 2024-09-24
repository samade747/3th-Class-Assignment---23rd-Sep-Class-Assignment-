
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ParentComponent from './components/ParentComponent/ParentComponent';
import Footer from './components/Footer/Footer';



const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to My App!</h1>
        <ParentComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
