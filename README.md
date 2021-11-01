# Blindr
<img src="https://blindr-job.s3.us-west-1.amazonaws.com/blindr-home.png" />
<br/>
<a href="https://blindr-job.herokuapp.com/#/">
    <img src='https://blindr-job.s3.us-west-1.amazonaws.com/visit-btn.png' style='width: 180px; height: 60px'/>
</a>
<br/>

## Overview
Looking for jobs can be a long and tedious process; Personalized cover letters, networking and coding challenges take a lot of time and are really only worth it for companies you like and want to work with. Enter Blindr!! Our app aims to disrupt the traditional gateway into a company by targeting job openings that you are not only qualified for but compelled by. Using state-of-the-art UI, job seekers can select their preferences and skills and then swipe left or right to either begin a conversation with a recruiter for that specific job or move on to the next opportunity. Never before has so much power been in the hands of job seekers; Now is your time. Don't waste a second!

## Technologies

This Javascript project runs on the MERN stack. For the backend, we leveraged Express.js and Node.js as a standard way of implementing Mongo API requests to store and retrieve user, job and employer data. On the frontend, we utilized the modern React.js and Redux combination to provide a supplimental frontend application state and limit the amount of re-rendering necessary to display information.

## Functionality

We implemented multiple features in order to convey the general idea of the product, primarily secure user authentication, profile creation and updating, job application matching and recruiter chatting. The user creates an account. Upon login, they are redirected to a page to submit career information. That information is in turn used to match with job postings that are relative to their skills. Upon a match, users can initiate a conversation with the recruiter in charge of managing the posting through our chat feature and ease the overall application process.

### User Authentication

<img src='https://blindr-job.s3.us-west-1.amazonaws.com/user-auth.png'/>

Utilizing the popular encryption package BCrypt, as well as Express.js, Mongo.db and Mongoose, we implemented a secure user auth that can create and login users given their associated information.

### User Profile

<img src='https://blindr-job.s3.us-west-1.amazonaws.com/blindr-edit.png'/>

Mongo.db, Express.js and React.js were our primary sources used to build out the user profile. Through our knowledge of CRUD functionality, we implemented features for profile creation and editing, including skills, education history and job history.

### Matching

The match feature is one we are particularly proud of and utilizes a React library to render actions for smooth, draggable cards that display job application information, including compensation and desired skills.

### Chatting/NavBar

Upon the user swiping the job posting card to the right, they will be matched with that company via a chat features located on the left-most side of the page inside of a vertical NavBar. They will then initiate a chat and can message their recruiter.

## Coordinating with a team

Creating a Full Stack MERN project can be heady enough. But then having to coordinate with a team of four adds another level to that complexity. We split the team into four roles: Team Lead (Mike Le), Frontend Lead (Joey Fernandez), Backend Lead (Joshua Kim-Biggs) and Flex Lead (Joshua Zhao)