import React from "react";
import data from "../data.json";
import Card from "./Card";

const Cards = () => {
  const cards = data.items;

  return (
    <div className="cards-container">
      {cards.map(({ src, naming, score, track, position }, index) => (
        <Card
          src={src}
          naming={naming}
          score={score}
          track={track}
          position={position}
          key={index}
        />
      ))}
    </div>
  );
};

export default Cards;
