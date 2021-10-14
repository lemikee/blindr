import React from 'react';
import TinderCard from 'react-tinder-card';
import JobPostingCard from './job_posting_card';

class RecCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      recs: [
        {
          id: 1,
          company: 'Google',
          location: 'Los Angeles',
          title: 'Junior Software Engineer',
          description: 'Do you want to work at Google? Of course you do!',
          skills: ['Python', 'Ruby', 'Java'],
          minComp: 100000,
          maxComp: 150000
        },
        {
          id: 2,
          company: 'Facebook',
          location: 'San Francisco',
          title: 'Junior Frontend Engineer',
          description: 'Do you want to work at Facebook? Of course you do!',
          skills: ['JavaScript', 'HTML', 'CSS'],
          minComp: 80000,
          maxComp: 130000
        },
        {
          id: 3,
          company: 'Amazon',
          location: 'Seattle',
          title: 'Junior Backend Engineer',
          description: 'Do you want to work at Amazon? Of course you do!',
          skills: ['C++', 'Ruby'],
          minComp: 90000,
          maxComp: 120000
        },
        {
          id: 4,
          company: 'Netflix',
          location: 'New York',
          title: 'Junior Fullstack Engineer',
          description: 'Do you want to work at Netflix? Of course you do!',
          skills: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
          minComp: 100000,
          maxComp: 150000
        }
      ]
    }
  }

  swiped = (direction, nameToDelete) => {
    console.log(nameToDelete + ' went ' + direction);
  };
  
  outOfFrame = name => {
    console.log(name + ' left the screen');
  };
  

  render() { 
    return (  
      <div className="rec-cards">
        <div className="rec-cards-container">
          {
            this.state.recs.map(rec => (
              <TinderCard
                className="swipe"
                key={rec.id}
                preventSwipe={["up", "down"]}
                onSwipe={dir => this.swiped(dir, rec.id)}
                onCardLeftScreen={() => this.outOfFrame(rec.id)}
              >
                {/* <div 
                  className="card"
                  style={{backgroundColor: 'gray'}}
                >
                  <h3>{rec.name}</h3>
                  <h2>{rec.topSkill}</h2>
                </div> */}
                <JobPostingCard 
                  rec={rec}/>
              </TinderCard>
            ))
          }
        </div>
      </div>
    );
  }
}
 
export default RecCards;