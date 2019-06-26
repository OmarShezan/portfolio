import React from 'react';
import './project.css';
import Title from '../component/Title';
import Card from './Card';
import Fade from 'react-reveal/Fade';
const Projects = () =>{
    return(
          <div id="projects">
                <Title name="Projects"/>
                  <div className="details">
                      <p>Showcasing some of my most successful and favourite projects that I was involved in<span role="img" aria-label="smiling face">😆</span>.<br/> More project will be coming soon...</p>
                  </div>
                <div className="wrapper">
                      {/* <span>dasda</span> */}
                <Fade right>
                  
                  <Card 
                        imagePath={require('../assets/Dark.jpg')}
                        date="March 2019"
                        title='ios/android app using React Native'
                        text="A fully functional native mobile application that runs on both ios and android operating system from a single code base using the power of React Native."
                        name="mmdb"
                        skills={["React Native", "expo", "Type Script", "NoSQL", "Firebase", "JavaScript"]}
                        />
                  <Card
                        imagePath={require('../assets/eventTracker.png')}
                        date="April 2019"
                        title="Display events data for nearby users"
                        name="Event Tracker"
                        text="Using Python and Bluetooth 4.0 (BLE) on Raspberry Pi to display upcoming event and deadline automatically for nearby registered user."
                        skills={["Bluetooth", "Python", "Raspberry-Pi", "Proximity Aware Technology"]}
                        />
                  
                  </Fade>
                  <Fade left>
                  <Card
                        imagePath={require('../assets/microbit.jpg')}
                        date="February 2019"
                        title="Micro:Bit operated Etch a Sketch board"
                        name="Team Ellen"
                        text="Working with a multidisciplinary team to create an Etch a Sketch board that can be operated using headrest mounted switches on a wheelchair."
                        link='http://blog.sela-sheffield.org/2018/12/last-week-four-members-of-sela.html'
                        skills={["Python", "Micro:Bit", "Accessibility", "Hardware Production" ]}
                  />
                  <Card
                        imagePath={require('../assets/coding.svg')}
                        date="ongoing"
                        title="Daily Coding Problem"
                        name="Coding Problems"
                        text="Find solutions to problems proposed by tech companies such as Google, Facebook, Uber and more. Problems are solved in JavaScript."
                        skills={["Problem Solving", "JavaScript", "Algorithm"]}
                        link="https://github.com/OmarShezan/DailyCodingProblem"
                  />
                  <Card
                        imagePath={require('../assets/server.svg')}
                        date="June 2019"
                        title="Local File Share"
                        name="Local Server"
                        text="Given a folder location, this app will spin-up a local server that will display all the files in that folder to be download."
                        skills={["NodeJS", "Express", "EJS"]}
                        link="https://github.com/OmarShezan/LocalFileShare"
                  />
                  </Fade>
                </div>
                
          </div>
    )
}
export default Projects;