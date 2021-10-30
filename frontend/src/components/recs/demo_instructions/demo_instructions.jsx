import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const DemoInstructions = () => {
  return (  
    <div className="demo-swipe-animation-container">
      <AiOutlineArrowLeft className="demo-swipe-arrow left" /> 
      <h1 className="demo-swipe">Swipe</h1> 
      <AiOutlineArrowRight className="demo-swipe-arrow right"/>
    </div>
  );
}
 
export default DemoInstructions;