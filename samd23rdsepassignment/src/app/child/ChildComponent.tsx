import React from 'react';
import styles from './ChildComponent.module.css';

// Define the type for props
interface ChildComponentProps {
  title: string;
  title1: string;
  description: string;
}

// Child component that receives props
const ChildComponent: React.FC<ChildComponentProps> = ({ title, description, title1 }) => {
  return (
    <div className={styles.child}>
      <h2>{title}</h2>

      <h3>
        {title1}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default ChildComponent;
