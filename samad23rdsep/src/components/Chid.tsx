interface ChildProps {
    message: string;
  }
  
  const Child = ({ message }: ChildProps) => {
    return <p>{message}</p>;
  };
  
  export default Child;