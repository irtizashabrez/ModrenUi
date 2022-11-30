import React from 'react'
import './possibility.css'

import possibilityImage from "../../assets/possibility.png";

function Possibility() {
  return (
    <div className='gpt3_possibilities section-padding' id='possibilities'>
      <div className="gpt3_possibilities_image">
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className="gpt3_possibilities_content">
        <h4>Request Early Access to Get Started.</h4>
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p>Yet bet any traveling assistance indulgence unpleasing. Not thoughts all exercise boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility