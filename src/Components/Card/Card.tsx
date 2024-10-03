import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

// React.FC<Props> - set object type to Functional Component
// JSX.Element - set return type to JSX Element

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate
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
      <p className="info">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio onPortFolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  );
};

export default Card;
