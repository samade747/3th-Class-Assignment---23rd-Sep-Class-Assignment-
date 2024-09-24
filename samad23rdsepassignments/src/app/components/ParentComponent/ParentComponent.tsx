import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const parentData = "Hello from Parent!";

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent message={parentData} />
    </div>
  );
};

export default ParentComponent;