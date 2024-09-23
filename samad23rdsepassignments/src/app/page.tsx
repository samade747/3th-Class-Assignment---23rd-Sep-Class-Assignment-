// page.tsx
import Navbar from './components/navbar/page';
import Footer from './components/footer/page';
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
