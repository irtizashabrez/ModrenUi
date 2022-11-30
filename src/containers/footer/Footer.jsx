import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg';

function Footer() {
  return (
    <div className='gpt3_footer section-padding'>
      <div className="gpt3_footer_heading">
        <h1 className='gradient_text'>Do you want to step into the future before others</h1>
      </div>
      <div className="gpt3_footer_btn">
        <p>Request Eraly Access</p>
      </div>
      <div className="gpt3_footer_links">
        <div className="gpt3_footer_links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>I don't have any rights to it. All rights reserved to the owner</p>
        </div>
        <div className="gpt3_footer_links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer_links_div">
          <h4>Company</h4>
          <p>Term & Condtions</p>
          <p>Privicy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer_links_div">
          <h4>Get in touch</h4>
          <p>Lahore Pakistan</p>
          <p>090078601</p>
          <p>irtizashabrez@gmail.com</p>
        </div>
      </div>
      <div className="gpt3_footer_copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer