import React from 'react';
import './project.css';
import Title from '../component/Title';
import Card from './Card';
import Fade from 'react-reveal/Fade';
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isloading: true,
            projects: []
        }
    }
    componentDidMount() {
        fetch("https://us-central1-os-backend.cloudfunctions.net/getAllProjects")
            .then((response) => response.json())
            .then((data) => {
                let temArray = []
                let value = Object.values(data)
                value.forEach(item => {
                    temArray.push({
                        img: item.img,
                        name: item.name,
                        title: item.title,
                        date: item.data,
                        text: item.text,
                        skills: item.skills,
                        link: item.link
                    })
                })
                // console.log(value)
                // console.log(temArray)
                this.setState({
                    projects: temArray,
                    isloading: false
                })
            })
    }
    render() {
        return (
            <div id="projects">
                        {
                              
                        }
                          <Title name="Projects"/>
                            <div className="details">
                                <p>Showcasing some of my most successful and favourite projects that I was involved in<span role="img" aria-label="smiling face">😆</span>.<br/> More project will be coming soon...</p>
                            </div>
                          <div className="wrapper">
                          <Fade right>
                                {
                                      this.state.isloading?
                                          <div className="lds-ripple"><div></div><div></div></div>
                                          :
                                          this.state.projects.map((Element, index)=>{
                                                if(Element.img !== "")  {
                                                      return(   
                                                      <Card 
                                                            key={index}
                                                            imagePath={Element.img}
                                                            date={Element.date}
                                                            title={Element.title}
                                                            text= {Element.text}
                                                            name={Element.name}
                                                            skills={Element.skills}
                                                            link = {Element.link}/>
                                                            )
                                                }
                                                else return ""              
                                      })
                                }
                            </Fade>
                          </div>
                          
                    </div>
        )
    }

}
export default Projects;
