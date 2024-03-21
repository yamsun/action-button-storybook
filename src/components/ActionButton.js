import React from 'react'

import PropTypes from "prop-types"

import { UserCircle } from "@phosphor-icons/react";


// display type - default = text only, iocn with text, iocn only
// type - default, neutral, reverse - bg type 
// status - default, hover, disabled
// size - Default (28px), Small (24px), X-Small (22px)

const ActionButton = ({ 
  label = "Action", displayType = 'default', type = 'default', status = "default", size = "default", handleClick
}) => {

  // type = "default", status = "default"
  let bgColor = "#fff";
  let iconColor = "#47B647";
  let textColor = "#47B647";
  let opacity = 1;

  let fontSize = '16px';


  if(size =="small"){
    fontSize = '14px'
  }else if(size =="x-small"){
    fontSize = "12px"
  }

  if( status == "hover" ){
    bgColor = "#EDFAED";
    textColor = "#47B647";
    iconColor = "#47B647";
  } else if( status == "disabled" ){
    let bgColor = "#fff";
    let iconColor = "#47B647";
    let textColor = "#47B647";
    opacity = 0.33;
  }

  if(type == "neutral"){
    bgColor = "#fff";
    textColor = "#282829";
    iconColor = "#5B5B5C";

    if(status == "hover"){
    bgColor = "#F2F3F5";
    textColor = "#282829";
    iconColor = "#5B5B5C";
    } else if( status == "disabled"){
      bgColor = "#F2F3F5";
    textColor = "#282829";
    iconColor = "#5B5B5C";
    opacity = 0.33;
    }

  } else if(type == "reverse"){
    bgColor = "#0F0F0F";
    iconColor = "#FFFFFF";
    textColor = "#FCFCFC";

    if(status == "hover"){
      bgColor = "#282829";
      textColor = "#FCFCFC";
      iconColor = "#FFFFFF";
      } else if( status == "disabled"){
        bgColor = "#282829";
        iconColor = "#FFFFFF";
        textColor = "#FCFCFC";
      opacity = 0.33;
      }

  }

  return (
    <>
      <div role='button' style={{ display:"flex", flexDirection:"row", alignItems:"center", color:textColor, backgroundColor: bgColor, height:"28px",  lineHeight:"24px", width: 'min-content', fontSize: fontSize, borderRadius:'8px', padding:"2px 4px", opacity: opacity}} onClick={handleClick}>

        {displayType?.includes("icon") ? <UserCircle style={{fontSize: '1.5em', color: iconColor}} />: null}

        {
          displayType === "iconOnly"? null : 

      <div style={{ cursor:"pointer",  backgroundColor: bgColor,  padding:'2px 4px 2px 4px', border: 'none',  fontWeight:'600', color:textColor, borderRadius:'8px', fontSize:"1em" }}>
        {label? label : "Action"}
      </div>

        }

    </div>
    </>
  )
}

// display type - default = text only, iocn with text, iocn only
// type - default, neutral, reverse - bg type 
// status - default, hover, disabled
// size - Default (28px), Small (24px), X-Small (22px)

ActionButton.propTypes = {
  label: PropTypes.string,
  displayType: PropTypes.oneOf(["text", "iconWithText", "iconOnly"]),
  type: PropTypes.oneOf(["default", "neutral", "reverse"]),
  status: PropTypes.oneOf(["default", "hover", "disabled"]),
  size: PropTypes.oneOf(["default", "small", "x-small"]),
  handleClick: PropTypes.func,
}

export default ActionButton