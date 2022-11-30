import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

const titleText = "GPT-3 and Open AI is the future. Let us explore how it is?";
function Blog() {
  return (
    <div className='gpt3_blog section-padding' id='blog'>
      <div className="gpt3_blog_header">
        <h1 className="gradient_text">
          A lot is happening, We are Blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog_container">
        <div className="gpt3_blog_container_groupA">
          <Article imagUrl={blog01}  data="Nov 22,2022" title={titleText}/>
        </div>
        <div className="gpt3_blog_container_groupB">
          <Article imagUrl={blog02} date="Nov 22,2022" title={titleText}/>
          <Article imagUrl={blog03} date="Nov 22,2022" title={titleText}/>
          <Article imagUrl={blog04} date="Nov 22,2022" title={titleText}/>
          <Article imagUrl={blog05} date="Nov 22,2022" title={titleText}/>
        </div>
      </div>
    </div>
  )
}

export default Blog