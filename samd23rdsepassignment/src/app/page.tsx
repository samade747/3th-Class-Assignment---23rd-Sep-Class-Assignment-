import ChildComponent from './child/ChildComponent';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>

      
      <ChildComponent 
        title="This is the Child Component"
        description="Props are passed from the parent Home component."
      />

      <ChildComponent 
        title="Another Child Component"
        description="This is a second instance of the child component with different props."
      />
    </main>
  );
}
