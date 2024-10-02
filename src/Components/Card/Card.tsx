import React from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

// React.FC<Props> - set object type to Functional Component
// JSX.Element - set return type to JSX Element

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmhexdIMM41J1ckuQPn4rdpfrrdSfc0pu5g&s" />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <div className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vel.
      </div>
    </div>
  );
};

export default Card;
