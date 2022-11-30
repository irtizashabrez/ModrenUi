import React from 'react'
import { Feature } from '../../components';
import './features.css'

const feratureData = [
  {
    title: "Improving end distrust instantly",
    text: "From they fine John he give of riches. They age and draw mrs like. Improving end distrust may instantly was household applauded"
  },
  {
    title: "Become the trended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    title: "Message or an arm",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or an arm noting amongst chiefly address."
  },
  {
    title: "Reality boy low county",
    text: "Really boy law county she unable her sister. Feet you off its like six. Among sex are leave law built now. In built table in an rapid blush."
  }
];

function Features() {
  return (
    <div className='gpt3_feature section-padding' id='features'>
      <div className='gpt3_feature_heading'>
        <h1 className="gradient_text">
          The Future is Now and You Just Need To realize it. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3_feature_container">
        {feratureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Features