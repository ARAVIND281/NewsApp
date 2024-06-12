import React, { useEffect, useState } from 'react';
import { fetchLatestNews } from '../services/newsService';
import ArticleCard from './ArticleCard';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import './HomePage.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const news = await fetchLatestNews(page);
      setArticles(news);
      setLoading(false);
    };
    getNews();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    const getNews = async () => {
      setLoadingNextPage(true);
      const news = await fetchLatestNews(page);
      setArticles(prevArticles => [...prevArticles, ...news]);
      setLoadingNextPage(false);
    };
    getNews();
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="home-page">
      <div className="article-grid">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      {loading ? (
        <ProgressSpinner />
      ) : (
        <div>
          {loadingNextPage ? (
            <ProgressSpinner />
          ) : (
            <Button label="Load More" icon="pi pi-refresh" onClick={handleNextPage} className="p-button-raised p-button-secondary" />
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
