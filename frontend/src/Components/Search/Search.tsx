import React, { ChangeEvent, SyntheticEvent } from "react";

// Define the props interface for the Search component
interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void; // Handler for form submission
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void; // Handler for input change
  onClick: (e: SyntheticEvent) => void; // Handler for button click
  search: string | undefined; // The current search input value, can be undefined
}

// Functional component for the search form
const Search: React.FC<Props> = ({
  onSearchSubmit,
  handleSearchChange,
  onClick,
  search,
}: Props): JSX.Element => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Form for search input */}
        <form
          className="form relative flex flex-col w-full p-0 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          {/* Input field for search queries */}
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black placeholder-opacity-25 focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search} // Controlled component value
            onChange={handleSearchChange} // Updates the search state on change
          />
        </form>
        {/* Search button, triggers onClick handler */}
        <button
          className="p-2 border-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
          onClick={(e) => onClick(e)}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
