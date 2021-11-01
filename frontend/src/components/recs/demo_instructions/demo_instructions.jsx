import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const DemoInstructions = () => {
  return (  
    <div className="demo-swipe-animation-container">
      <div className="demo-swipe-animation-top">
        <AiOutlineArrowLeft className="demo-swipe-arrow left" /> 
        <h1 className="demo-swipe">Swipe</h1> 
        <AiOutlineArrowRight className="demo-swipe-arrow right"/>
      </div>
      <h1 className="demo-swipe-label"></h1>
    </div>
  );
}
 
export default DemoInstructions;