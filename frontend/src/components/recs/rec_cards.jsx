import React from "react";
import TinderCard from "react-tinder-card";
import JobPostingCard from "./job_posting_card";
import DemoInstructions from "./demo_instructions/demo_instructions";

class RecCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recs: [
        {
          id: 1,
          company: "Google",
          location: "Los Angeles",
          title: "Junior Software Engineer",
          description: "Do you want to work at Google? Of course you do!",
          skills: ["Python", "Ruby", "Java"],
          minComp: 100000,
          maxComp: 150000,
        },
        {
          id: 2,
          company: "Facebook",
          location: "San Francisco",
          title: "Junior Frontend Engineer",
          description: "Do you want to work at Facebook? Of course you do!",
          skills: ["JavaScript", "HTML", "CSS"],
          minComp: 80000,
          maxComp: 130000,
        },
        {
          id: 3,
          company: "Amazon",
          location: "Seattle",
          title: "Junior Backend Engineer",
          description: "Do you want to work at Amazon? Of course you do!",
          skills: ["C++", "Ruby"],
          minComp: 90000,
          maxComp: 120000,
        },
        {
          id: 4,
          company: "Netflix",
          location: "New York",
          title: "Junior Fullstack Engineer",
          description: "Do you want to work at Netflix? Of course you do!",
          skills: ["JavaScript", "Ruby", "HTML", "CSS"],
          minComp: 100000,
          maxComp: 150000,
        },
      ],
    };
  }

  componentDidMount() {
    this.props.fetchRecommendations(this.props.currentUser.id)
  }

  swiped = (direction, jobId) => {
    // console.log(nameToDelete + ' went ' + direction);
    if (direction === "left") {
      this.props.deleteMatch({ userId: "userId", jobId: "jobId" })
    } else {
      this.props.createMatch({ userId: this.props.currentUser.id, jobId: jobId })
    }
  };

  outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  render() {
    return (
      <div className="rec-cards">
        <div className="rec-cards-container">
          {Object.values(this.props.jobs).map( job => (
            <TinderCard
              className="swipe"
              key={job._id}
              preventSwipe={["up, down"]}
              onSwipe={(dir) => this.swiped(dir, job._id)}
              onCardLeftScreen={() => this.outOfFrame(job._id)}
            >
              <JobPostingCard rec={job} />
            </TinderCard>
          ))}
          
        </div>
        <DemoInstructions />
      </div>
    );
  }
}

export default RecCards;
