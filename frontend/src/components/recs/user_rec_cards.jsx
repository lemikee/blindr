import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';


const UserRecCards = (props) => {
  
  const [recs, setRecs] = useState([
    {
      name: 'Pythonista',
      topSkill: 'Python'
    },
    {
      name: 'Rubyist',
      topSkill: 'Ruby'
    },
    {
      name: 'Javanator',
      topSkill: 'Java'
    },
    {
      name: 'Javascriptor',
      topSkill: 'JavaScript'
    }
  ])
  
  const swiped = (direction, nameToDelete) => {
    console.log(nameToDelete + ' went ' + direction);
  };
  
  const outOfFrame = name => {
    console.log(name + ' left the screen');
  };
  
  return (  
    <div className="rec-cards">
      <div className="rec-cards-container">
        {
          recs.map(rec => (
            <TinderCard
              className="swipe"
              key={rec.name}
              preventSwipe={["up", "down"]}
              onSwipe={dir => swiped(dir, rec.name)}
              onCardLeftScreen={() => outOfFrame(rec.name)}
            >
              <div 
                className="card"
                style={{backgroundColor: 'gray'}}
              >
                <h3>{rec.name}</h3>
                <h2>{rec.topSkill}</h2>
              </div>
            </TinderCard>
          ))
        }
      </div>
    </div>
  );
}
 
export default UserRecCards;