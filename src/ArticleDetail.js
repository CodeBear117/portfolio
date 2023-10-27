import React from 'react';
import { useParams } from 'react-router-dom';

// Sample data for demonstration purposes
const articles = [
  { id: '1', title: "Article 1", content: "Full content of article 1..." },
  { id: '2', title: "Article 2", content: "Full content of article 2..." },
  // ... more articles
];

function ArticleDetail() {
  // Get the articleId from the URL
  const { articleId } = useParams();

  // Find the article based on its ID
  const article = articles.find(a => a.id === articleId);

  // If the article doesn't exist, display an error message
  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="article-detail">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;