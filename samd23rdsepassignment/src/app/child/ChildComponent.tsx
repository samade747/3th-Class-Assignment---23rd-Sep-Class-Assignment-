import React from 'react';
import styles from './ChildComponent.module.css';

// Define the type for props
interface ChildComponentProps {
  title: string;
  description: string;
}

// Child component that receives props
const ChildComponent: React.FC<ChildComponentProps> = ({ title, description }) => {
  return (
    <div className={styles.child}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ChildComponent;
