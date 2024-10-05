import React, { SyntheticEvent } from "react";

// Define the props for the DeletePortfolio component
interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void; // Handler function for deleting a portfolio item
  portfolioValue: string; // The value of the portfolio item to be deleted
}

// Functional component for deleting a portfolio item
const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <>
      {/* Form to handle portfolio deletion */}
      <form onSubmit={onPortfolioDelete}>
        {/* Hidden input to store the value of the portfolio item */}
        <input hidden={true} value={portfolioValue} readOnly />

        {/* Submit button for deleting the portfolio item */}
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </>
  );
};

export default DeletePortfolio;
