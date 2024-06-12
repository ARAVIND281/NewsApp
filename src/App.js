import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Politics from './pages/Politics';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Search from './components/Search';
import ArticleDetail from './components/ArticleDetail';
import Navbar from './components/Navbar';
import './styles/styles.css';
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css';  

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/search" element={<Search />} />
        <Route path="/article/:articleId" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
