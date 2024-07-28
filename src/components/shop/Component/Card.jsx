import React from 'react';
import './Card.css';
export default function Card({img, title, description, price}) {
  return (
    <div className="Item-card">
      <img src={img} alt={title} className="card-image" />
      <div className="Item-card-content">
        <div className="Item-card-content-text">
            <h2 className="Item-card-title">{title}</h2>
            <p className="Item-card-description">{description}</p>
        </div>
        <p className="Item-card-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
