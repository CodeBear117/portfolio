import React from 'react';
import './BlogPage.css'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetail from './ArticleDetail';

function BlogPage() {
  const articles = [
    { id: 1, title: "The Future of ChatGPT: A Self-Reflective Perspective", summary: "ChatGPT, a beacon in the AI landscape, is on the cusp of transformative growth. From mastering nuanced human interactions and diving into multi-sensory experiences to navigating ethical dilemmas and reshaping education, the AI's trajectory promises a harmonious blend of innovation and introspection. As we stand at this digital crossroads, the evolving relationship between humans and AI beckons both excitement and contemplation." },
    { id: 2, title: "Article 2", summary: "Summary of article 2..." },
    // ... more articles
  ];


  return (
    <div className="blog-container">
      <Routes>
      <Route path="/Blog/:1" element={<ArticleDetail />} />
      </Routes>
      <div className="blog-left-column">
        {/* Left column content */}
      </div>
      <div className="blog-center-column">
        <h1>Blog</h1>
        {articles.map(article => (
          <div key={article.id} className="article-tile">
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <Link to={`/Blog/${article.id}`}>Read More</Link>
          </div>
        ))}
      </div>
      <div className="blog-right-column">
        {/* Right column content */}
      </div>
    </div>  
  );
}

export default BlogPage;