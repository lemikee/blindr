import React from 'react';
import {FaGithub, FaLink} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const AboutItem = (props) => {
  const {item} = props;

  return (  
    <div className="about-item">
      <img src={item.image} />
      <div className="about-item-right">
        <h1>{item.name}</h1>
        <h2>{item.role}</h2>
        <a href={item.github} target="_blank">
          <FaGithub />
          <h4>Github</h4>
        </a>
        <a href={item.linkedin} target="_blank">
          <FaLinkedin />
          <h4>Linkedin</h4>
        </a>
      </div>
      
    </div>
  );
}
 
export default AboutItem;