import React from 'react';
import './style.css';
import Title from '../component/Title'
const HomePage = () =>{
    return(
          <div id="about">
              <Title  name="About"/>
              <div className="content">
              <img className="profilePic" alt="standing near cliff" src={require('../assets/me.jpg')}/>
              My interest in programming came from studying computing in college. I was fascinated by the possibility and power of programming. as I learnt more about programming my passion for the industry grew and I decided to study 
              <strong> BEng Software Engineering</strong> at <strong> Sheffield Hallam University</strong>
              <br/>
              <br/>
              I always enjoy learning about new technology and frameworks, it keeps me updated with the industry and inspires me to create new things.  Currently, I'm learning flutter to create a small mobile app
              other than programming I love photography, editing and playing sports. 
              </div>
          </div>
    )
}
export default HomePage;