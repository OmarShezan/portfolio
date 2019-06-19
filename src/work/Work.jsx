import React from 'react';
import './work-style.css';
import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Title from '../component/Title';
import Event from './Event'


const Work = () =>{
    return(
          <div id="work">

          
              <Title name="Experience"/>
              
              <VerticalTimeline>

              <Event 
              data="July 2018 - September 2018"
              jobTitle="IT Assistant"
              companyName="Sheffield Hallam University"
              skillList= {["Java", "XML", "Microsoft Excel"]}
              texts = "3 month summer job working with Convrise IT support team. Converise is a web application used by PhD student to submit request for research application."
              icon = "w"
              />

              <Event 
              data="June 2017 - June 2018"
              jobTitle="Junior Software Engineer"
              companyName="Servelec"
              skillList={[".NET","C#", "Silverlight", "SQL"]}
              texts = "At Servelec HSC I have worked with many different technologies to fix bugs, develop new tools and document changes. While working in a team I was able to gain valuable experience in teamwork and communication skills"
              icon = "w"
              />

              <Event 
              data="October 2018 - February 2019"
              jobTitle="Hackcessible Challenge"
              companyName="Sheffield University"
              skillList={["Python","Eletronics", "micro:bit"]}
              texts="Near the end of 2018, I had the pleasure to get involved with Hackcessible challenge. it involved working with other multidisciplinary students from Sheffield University, for a client with cerebral palsy, to design and create a prototype product that will be used to help our client sketch."
              
              />

              <Event 
              data="April 2016 - September 2016"
              jobTitle="Waiter"
              companyName="Spice Tree"
              skillList={["Communication","Organisation", "Interpersonal Skill"]}
              icon="w"
              texts=""
              />
          </VerticalTimeline>
          </div>
    )
}
export default Work;

