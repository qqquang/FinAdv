import React, { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { v4 as uuidv4 } from "uuid";

// Define the props for the ListPortfolio component
interface Props {
  portfolioValues: string[]; // Array of portfolio items
  onPortfolioDelete: (e: SyntheticEvent) => void; // Handler function for deleting a portfolio item
}

// Functional component to display a list of portfolio items
const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <section id="portfolio">
      {/* Portfolio heading */}
      <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
        My Portfolio
      </h2>

      {/* Container for portfolio cards */}
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        <>
          {/* Conditionally render portfolio items or a message if the portfolio is empty */}
          {portfolioValues.length > 0 ? (
            portfolioValues.map((portfolioValue) => {
              return (
                <CardPortfolio
                  portfolioValue={portfolioValue} // The value of the current portfolio item
                  onPortfolioDelete={onPortfolioDelete} // Pass down the delete handler to the card component
                  key={uuidv4()} // Unique key for each card
                />
              );
            })
          ) : (
            // Message displayed when the portfolio is empty
            <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
              Your portfolio is empty.
            </h3>
          )}
        </>
      </div>
    </section>
  );
};

export default ListPortfolio;
