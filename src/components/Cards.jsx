import React from 'react';
import card1Image from '../assets/card1_image.png';
import card2Image from '../assets/card2_image.png';
import card3Image from '../assets/card3_image.png';

const Cards = () => (
  <section className="cards">
    <div className="card">
      <img src={card1Image} alt="Card 1" />
      <div className='card-description'>
        <span>Explore large, destructible environments where no two games are ever the same.</span>
      </div>
    </div>
    <div className="card">
      <img src={card2Image} alt="Card 2" />
      <div className='card-description'>
        <span>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</span>
      </div>
    </div>
    <div className="card">
      <img src={card3Image} alt="Card 3" />
      <div className='card-description'>
        <span>Discover even more ways to play across thousands of creator-made game genres</span>
      </div>
    </div>
  </section>
);

export default Cards;