import React from 'react'
import './article.css';

function Article({imagUrl, date, title}) {
  return (
    <div className='gpt3_blog_container_article'>
      <div className="gpt3_blog_container_article_image">
        <img src={imagUrl} alt="blog" />
      </div>
      <div className="gpt3_blog_container_article_content">
        <div>
          <p>{date} test</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article.</p>
      </div>
    </div>
  )
}

export default Article