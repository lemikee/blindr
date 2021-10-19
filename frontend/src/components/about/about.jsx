import React from 'react';
import AboutItem from './about_item';
import mike_le from './img/mike_le.jpeg';
import joey_fernandez from './img/joey_fernandez.jpg';
import josh_kb from './img/josh_kb.png';
import josh_zhao from './img/josh_zhao.jpg';


const About = () => {

  const info = [
    {
      name: 'Mike Le',
      role: 'Team Lead',
      github: 'https://github.com/lemikee',
      linkedin: 'https://www.linkedin.com/in/mike-le/',
      image: mike_le
    },
    {
      name: 'Joey Fernandez',
      role: 'Frontend Lead',
      github: 'https://github.com/josephafern',
      linkedin: 'https://www.linkedin.com/in/joseph-fernandez-5936716a/',
      image: joey_fernandez
    },
    {
      name: 'Josh Kim-Biggs',
      role: 'Backend Lead',
      github: 'https://github.com/joshgykim',
      linkedin: 'https://www.linkedin.com/in/josh-kimbiggs/',
      image: josh_kb
    },
    {
      name: 'Josh Zhao',
      role: 'Flex Lead',
      github: 'https://github.com/JZtheStudent',
      linkedin: 'https://www.linkedin.com/in/zhaojc/',
      image: josh_zhao
    }
  
  ]
  

  return (  
    <div className='about-page-container'>
      <div className='about-section'>
        <h1>About</h1>
        {
          info.map((item, idx) =>(
            <AboutItem 
              key={idx}
              item={item}
            />
          ))
        }
      </div>
      
    </div>
  );
}
 
export default About;