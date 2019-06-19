import React from 'react';
const Pill = (props) =>{
    return(
        <div style={{
            backgroundColor:"#ddd", 
            borderRadius:"10px", 
            display:"inline-block", 
            padding:"0px 10px", 
            textAlign:"center", 
            justifyContent:"center",
            fontSize:"15px",
            marginRight:"5px"}}>
                
                {props.text}
        </div>
          
    )
}
export default Pill;