import React, { useState } from 'react'
import latest from './Easy_bank_Latest'
const Easy_bank_Articles = () => {
  const [articles, setarticles] = useState(latest)
  return (
    <>
      <div className="articles">
        <h1 className='latest'>Latest Articles</h1>
        <div className="article">
        {articles.map((article) =>(
                <div className="sub-article" key={article.id}>
                    <img className='image' src={article.img1} />
                    <p className='author'>{article.Author}</p>
                    <p className='head'>{article.heading}</p>
                    <p className='content'>{article.content}</p>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Easy_bank_Articles
