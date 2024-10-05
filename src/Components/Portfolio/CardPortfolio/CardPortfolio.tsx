import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";

// Define the props for the CardPortfolio component
interface Props {
  portfolioValue: string; // The value of the portfolio item (e.g., a stock ticker)
  onPortfolioDelete: (e: SyntheticEvent) => void; // Handler function for deleting a portfolio item
}

// Functional component for rendering a portfolio card
const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      {/* Link to the company page using the portfolioValue (e.g., stock ticker) */}
      <Link
        to={`/company/${portfolioValue}`}
        className="pt-6 text-xl font-bold"
      >
        {portfolioValue}
      </Link>

      {/* Component for deleting this portfolio item */}
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete} // Pass down the delete handler
        portfolioValue={portfolioValue} // Pass the current portfolio value to be deleted
      />
    </div>
  );
};

export default CardPortfolio;
