'use client'
import ChildComponent from './child/ChildComponent';
import { useRouter } from 'next/navigation'; 


export default function Home() {
  const router = useRouter(); // Initialize useRouter

  const navigateToAbout = () => {
    router.push('/about'); // Navigate to the About page
  };

  const navigateToContact = () => {
    router.push('/contact'); // Navigate to the Contact page
  };

  return (
    <main>
      <h1>Welcome to the Home Page</h1>

     
      <ChildComponent 
        title="This is the Child Component"
        title1="Props Example"
        description="Props are passed from the parent Home component."
      />

      <ChildComponent 
        title="Another Child Component"
        title1="Props Example 2"
        description="This is a second instance of the child component with different props."
      />

     
      <div>
        <button onClick={navigateToAbout}>Go to About Page</button>
        <button onClick={navigateToContact}>Go to Contact Page</button>
      </div>
    </main>
  );
}
