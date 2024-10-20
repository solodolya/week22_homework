import React from 'react';
import heroes from '../../data/heroes.json';
import HeroesCard from '../HeroesCard/HeroesCard';
import "./Heroes.css";

export default function Heroes() {
  return ( 
    <div className="card-container">
      {heroes.map((item, index) => (
        <HeroesCard key={index} {...item} />
      ))}
    </div>
  );
}