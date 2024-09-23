import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ParentComponent from './components/ParentComponent/ParentComponent';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My App!</h1>
      <ParentComponent />
      <Footer />
    </div>
  );
}
