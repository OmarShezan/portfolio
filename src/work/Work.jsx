import React from "react";
import "./work-style.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Title from "../component/Title";
import Event from "./Event";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.experience = [];
    this.state = {
      isloading: true,
      experience: [],
    };
  }
  componentDidMount() {
    const localArr = localStorage.getItem("workExperience")
    if (localArr){
      let value = JSON.parse(localArr)
      let temArray = [];
      console.log("local store")
      console.log(localArr)
      let index = 0;
        value.forEach((item) => {
          index += 1;
          temArray.push({
            company: item.company,
            position: item.position,
            date: item.date,
            text: item.text,
            skills: item.skills,
            icon: item.icon,
            timestamp: item.timestamp,
            index: index,
          });
        });
        let sortedArray = [];
        sortedArray = temArray.sort((a, b) => {
          return b.timestamp - a.timestamp;
        });
        this.setState({
          experience: sortedArray,
          isloading: false,
        });
    }else{

      fetch("https://us-central1-os-backend.cloudfunctions.net/getAllExperience")
        .then((response) => response.json())
        .then((data) => {
          let temArray = [];
          let value = Object.values(data);
          localStorage.setItem('workExperience', JSON.stringify(value));
  
          let index = 0;
          value.forEach((item) => {
            index += 1;
            temArray.push({
              company: item.company,
              position: item.position,
              date: item.date,
              text: item.text,
              skills: item.skills,
              icon: item.icon,
              timestamp: item.timestamp,
              index: index,
            });
          });
          let sortedArray = [];
          sortedArray = temArray.sort((a, b) => {
            return b.timestamp - a.timestamp;
          });
          this.setState({
            experience: sortedArray,
            isloading: false,
          });
        });
    }
  }

  render() {
    return (
      <div id="work">
        <Title name="Experience" />
        <div>
          <VerticalTimeline>
            {this.state.isloading ? (
              <div className="lds-ripple"></div>
            ) : (
              this.state.experience.map((item, index) => {
                return (
                  <Event
                    key={index}
                    icon={item.icon}
                    data={item.date}
                    jobTitle={item.position}
                    companyName={item.company}
                    skillList={item.skills}
                    texts={item.text}
                  />
                );
              })
            )}
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}
export default Work;
