import React from 'react';

interface ChildProps {
  message: string;
}

const ChildComponent: React.FC<ChildProps> = ({ message }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>{message}</p>
    </div>
  );
};

export default ChildComponent;