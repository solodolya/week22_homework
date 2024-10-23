import React from "react";
import './HeroesCard.css';

export default function HeroesCard({url, name, info, universe, alterego, occupation, friends, superpowers}) {
  return (
    <div className='card'>
      <img className="card-img" src={url} alt={name}/>
      <h2 className="card-title">{name || "Не указано"}</h2>
      <h4 className="card-info">{info || "Не указано"}</h4>
      <p className="card-text">Вселенная: {universe || "Не указано"}</p>
      <p className="card-text">Альтер эго: {alterego || "Не указано"}</p>
      <p className="card-text">Род деятельности: {occupation || "Не указано"}</p>
      <p className="card-text">Друзья: {friends || "Не указано"}</p>
      <p className="card-text">Суперсилы: {superpowers || "Не указано"}</p>
    </div>
  );
}
