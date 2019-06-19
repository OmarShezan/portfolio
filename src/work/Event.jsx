import React from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Pill from '../component/pill';
import { ReactComponent as WorkIcon } from '../assets/work.svg'
import { ReactComponent as Education } from '../assets/education.svg'
import 'react-vertical-timeline-component/style.min.css';

const blue = 'rgb(33, 150, 243)';
export default class Event extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isExtended: false
        }
    }

    handleContent(){
        if(this.props.texts.length <= 100){
            return this.props.texts
        }
        else{
        var shortText = this.props.texts.slice(0,100) + "...";
        var readMore = this.state.isExtended? "read less": "read more"
            return(
                <div style={{paddingTop:"10px"}}> 
                {this.state.isExtended ? this.props.texts : shortText}
                <div style={{textDecoration: "underline", cursor:"pointer"}}onClick={this.handleClick}>{readMore}</div>
                </div>
            )
        }
    }

    handleIcon(){
        if(this.props.icon==="w"){
            return <WorkIcon style={{width:"25px", height:"25px", position:"relative", display:"block"}}/>
        }
        else{
            return <Education style={{width:"25px", height:"25px", position:"relative", display:"block", }}/>
        }
    }
    handleClick = ()=>{
        this.setState({isExtended: !this.state.isExtended})
    }
    render(){
        return(
                 <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={this.props.data}
            iconStyle={{ background: blue, color: '#fff' }}
            icon={this.handleIcon()}>
            <div >{this.props.jobTitle}</div>
            <h4 className="vertical-timeline-element-subtitle">{this.props.companyName}</h4>
            {
                this.props.skillList.map(element => {
                    return <Pill key={element} text={element}/>
                })
            }
           <div>
            {this.handleContent()}
           </div>
            
           </VerticalTimelineElement>
        )
    }
}