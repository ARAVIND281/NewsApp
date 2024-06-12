import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const { title, author, publishedAt, urlToImage, description, url, categories } = article;

  const header = <img alt={title} src={urlToImage} className="article-image" />;
  const footer = (
    <span>
      <Button label="Read More" icon="pi pi-external-link" className="p-button-outlined p-button-secondary" onClick={() => window.open(url, '_blank')} />
    </span>
  );

  return (
    <div className="article-card-container">
      <Card title={title} subTitle={`By: ${author} | ${new Date(publishedAt).toLocaleDateString()}`} header={header} footer={footer} className="article-card">
        <div className="article-categories">
          {categories && categories.map((category, index) => (
            <Chip key={index} label={category} className="p-mr-2 p-mb-2" />
            
          ))}
        </div>
        <p className="article-description">{description}</p>
      </Card>
    </div>
  );
};

export default ArticleCard;
