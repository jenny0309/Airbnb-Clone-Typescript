import React from 'react';
import './Card.css';

interface CardProps {
  src: string;
  title: string;
  description: string;
  price?: string;
}

const Card = ({ src, title, description, price }: CardProps) => {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className='card__info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
