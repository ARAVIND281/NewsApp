import React, { useState, useEffect } from 'react';
import { searchNews } from '../services/newsService';
import ArticleCard from './ArticleCard';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Chip } from 'primereact/chip';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === '') return;
    setLoading(true);
    const news = await searchNews(query, 1);
    setResults(news);
    setPage(1);
    setLoading(false);

    const updatedHistory = [query, ...history.filter(item => item !== query)];
    setHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const handleNextPage = async () => {
    setLoadingNextPage(true);
    const news = await searchNews(query, page + 1);
    setResults(prevResults => [...prevResults, ...news]);
    setPage(prevPage => prevPage + 1);
    setLoadingNextPage(false);
  };

  const handleHistoryClick = async (searchQuery) => {
    setQuery(searchQuery);
    setLoading(true);
    const news = await searchNews(searchQuery, 1);
    setResults(news);
    setPage(1);
    setLoading(false);
  };

  return (
    <div className="search p-grid p-justify-center">
      <form onSubmit={handleSearch} className="p-col-12 p-md-8 p-lg-6">
        <div className="p-inputgroup">
          <InputText
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for news..."
            className="p-inputtext-lg p-d-block p-mb-2"
          />
          <Button type="submit" label="Search" icon="pi pi-search" />
        </div>
      </form>
      <div className="search-results p-grid p-justify-center p-col-12">
        {loading ? (
          <ProgressSpinner />
        ) : (
          results.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))
        )}
      </div>
      {!loading && results.length > 0 && (
        <div className="p-mt-2">
          {loadingNextPage ? (
            <ProgressSpinner />
          ) : (
            <Button label="Load More" icon="pi pi-refresh" onClick={handleNextPage} className="p-button-raised p-button-secondary" />
          )}
        </div>
      )}
      <div className="search-history p-col-12 p-md-8 p-lg-6">
        <h3>Search History</h3>
        <div className="history-chips">
          {history.map((item, index) => (
            <Chip
              key={index}
              label={item}
              className="p-mr-2 p-mb-2"
              onClick={() => handleHistoryClick(item)}
              removable
              onRemove={() => {
                const updatedHistory = history.filter((_, i) => i !== index);
                setHistory(updatedHistory);
                localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
              }}
              style={{ cursor: 'pointer',margin: '0 0.5rem 0.5rem 0'}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
