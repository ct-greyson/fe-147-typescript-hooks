import React from "react";

interface ChildProps {
  buttonClick: (message: string) => void;
}

const ChildComponent = ({ buttonClick }: ChildProps) => {

    /*
PARENT CALLBACK FOR REFERENCE
this becomes our buttonClick props
const handleChildClick = (message: string) => {
        console.log("MESSAGE FROM CHILD COMPONENT: ")
        console.log(message)
    }
        //allows us to notify parent component based on child component event
    */
  const handleClick = () => {
    buttonClick("Child component button has been clicked!");
  };
  return (
    <div>
      <h3>Child component</h3>
      <button onClick={handleClick}>Click Me!</button>
      <h3>Child component</h3>
    </div>
  );
};

export default ChildComponent;
