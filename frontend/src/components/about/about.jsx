import React from 'react';
import AboutItem from './about_item';
import josh_zhao from './img/josh_zhao.jpg'


const About = () => {

  const info = [
    {
      name: 'Mike Le',
      role: 'Team Lead',
      github: 'https://github.com/lemikee',
      linkedin: 'https://www.linkedin.com/in/mike-le/',
      image: josh_zhao
    },
    {
      name: 'Joey Fernandez',
      role: 'Frontend Lead',
      github: '',
      linkedin: '',
      image: josh_zhao
    },
    {
      name: 'Josh Kim-Biggs',
      role: 'Frontend Lead',
      github: '',
      linkedin: '',
      image: josh_zhao
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