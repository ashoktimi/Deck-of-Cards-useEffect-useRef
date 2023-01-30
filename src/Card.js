import React, { useState } from "react";
import './Card.css';

/** Single card: just renders the card as received from deck. */

function Card({name, image}) {

  const [{angle, randomX, randomY}] = useState({
    angle : Math.random() * 90 - 45,
    randomX : Math.random() * 40 - 20,
    randomY : Math.random() * 40 - 20,
  });

  const transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
  return <img className="Card"
            alt={name}
            src={image}
            style={{transform}} />;
}

export default Card;

