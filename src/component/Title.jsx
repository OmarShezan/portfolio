import React from 'react';
const Title = (props) =>{
    return(
        <div className={props.className} style={{fontSize: "40px", textAlign:"center", paddingTop:"1em"}}>{props.name}</div>
    )
}
export default Title;