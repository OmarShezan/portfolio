import React from 'react';
import './style.css';
import Title from '../component/Title'
const HomePage = () =>{
    return(
          <div id="about">
              <Title  name="About"/>
              <div className="content">
              <img className="profilePic" alt="standing near cliff" src={require('../assets/me.jpg')}/>
              <div className="about-text">
              My interest in programming began during my college years when I studied computing.
              I was fascinated by the possibility and power of programming.
              As I learned more about programming, my passion for the industry grew, and I decided to pursue <strong>BEng Software Engineering </strong> 
               at <strong>Sheffield Hallam University</strong>. Since then, I have enjoyed learning about new technologies and frameworks, keeping myself updated with the industry, and inspiring me to create new things.
              
              <br/>
              <br/>
              Aside from programming, I also have a keen interest in photography, editing, and sports. I find that these hobbies provide me with a creative outlet and allow me to approach problem-solving from a different perspective.</div>
          
              </div>
              </div>
    )
}
export default HomePage;