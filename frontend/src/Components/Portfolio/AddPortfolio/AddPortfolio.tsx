import React, { SyntheticEvent } from "react";

// Define the props for the AddPortfolio component
interface Props {
  onPortFolioCreate: (e: SyntheticEvent) => void; // Handler function for adding a portfolio item
  symbol: string; // The stock symbol or identifier to add to the portfolio
}

// Functional component for adding a stock symbol to the portfolio
const AddPortfolio = ({ onPortFolioCreate, symbol }: Props) => {
  return (
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      {/* Form for adding a portfolio item */}
      <form onSubmit={onPortFolioCreate}>
        {/* Hidden input to pass the stock symbol */}
        <input readOnly={true} hidden={true} value={symbol} />

        {/* Button to submit the form and add the symbol to the portfolio */}
        <button
          type="submit"
          className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
