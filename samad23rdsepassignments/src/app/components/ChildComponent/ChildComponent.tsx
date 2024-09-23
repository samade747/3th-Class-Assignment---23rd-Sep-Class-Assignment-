// components/ChildComponent/ChildComponent.tsx
interface ChildComponentProps {
    message: string;
  }
  
  const ChildComponent = ({ message }: ChildComponentProps) => {
    return <p>{message}</p>;
  };
  
  export default ChildComponent;
  