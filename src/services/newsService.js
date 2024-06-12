import axios from 'axios';

const API_KEY = 'API_KEY';
const BASE_URL = 'https://newsapi.org/v2';


export const fetchLatestNews = async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          country: 'us',
          page,
          pageSize: 10,
          apiKey: API_KEY,
        },
      });
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching latest news:', error);
      return [];
    }
  };
  
  export const fetchNewsByCategory = async (category, page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          category,
          country: 'us',
          page,
          pageSize: 10,
          apiKey: API_KEY,
        },
      });
      return response.data.articles;
    } catch (error) {
      console.error(`Error fetching ${category} news:`, error);
      return [];
    }
  };
  
  export const searchNews = async (query, page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/everything`, {
        params: {
          q: query,
          page,
          pageSize: 10,
          apiKey: API_KEY,
        },
      });
      return response.data.articles;
    } catch (error) {
      console.error('Error searching news:', error);
      return [];
    }
  };
  
  export const fetchArticleById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/everything`, {
        params: {
          q: decodeURIComponent(id),
          apiKey: API_KEY,
        },
      });
      return response.data.articles.find(article => encodeURIComponent(article.title) === id) || null;
    } catch (error) {
      console.error('Error fetching article by ID:', error);
      return null;
    }
  };
  