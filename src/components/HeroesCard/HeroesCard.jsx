import React from "react";
import './HeroesCard.css';

export default function HeroesCard({url, name, info, universe, alterego, occupation, friends, superpowers}) {
  return (
    <div className='card'>
      <img src={url} className="card-img" alt={name}/>
      <h2 className="card-title">{name}</h2>
      <h4 className="card-info">{info}</h4>
      <p className="card-text">Вселенная: {universe}</p>
      <p className="card-text">Альтер эго: {alterego}</p>
      <p className="card-text">Род деятельности: {occupation}</p>
      <p className="card-text">Друзья: {occupation}</p>
      <p className="card-text">Суперсилы: {superpowers}</p>
    </div>
  );
}