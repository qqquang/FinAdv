import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";

interface Props {
  id: string;
  searchResult: CompanySearch;
}

// React.FC<Props> - set object type to Functional Component
// JSX.Element - set return type to JSX Element

const Card: React.FC<Props> = ({
  id,
  searchResult
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img alt="company logo" />
      <div className="details">
        <h2>
          {searchResult.name} ({searchResult.symbol})
        </h2>
        <p>${searchResult.currency}</p>
      </div>
      <div className="info">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </div>
    </div>
  );
};

export default Card;
