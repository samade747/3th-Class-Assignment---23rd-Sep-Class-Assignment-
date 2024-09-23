import ChildComponent from '../ChildComponent/ChildComponent';

const ParentComponent = () => {
  const message = "Hello from Parent!";
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
