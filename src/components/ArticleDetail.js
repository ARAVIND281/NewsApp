import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../services/newsService';
import { ProgressSpinner } from 'primereact/progressspinner';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true);
      const fetchedArticle = await fetchArticleById(articleId);
      setArticle(fetchedArticle);
      setLoading(false);
    };
    getArticle();
  }, [articleId]);

  if (loading) {
    return <ProgressSpinner />;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="article-detail p-grid p-justify-center">
      <div className="p-col-12 p-md-8 p-lg-6">
        <h1>{article.title}</h1>
        <img src={article.urlToImage} alt={article.title} className="article-image" />
        <p className="article-author">By: {article.author}</p>
        <p className="article-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
        <p className="article-content">{article.content}</p>
        <p className="article-source">Source: {article.source.name}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;
