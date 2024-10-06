import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";

interface Props {}

// The main functional component for the search page
const SearchPage = (props: Props) => {
  // State to manage the search input value
  const [search, setSearch] = useState<string>("");

  // State to store search results, an array of CompanySearch objects
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

  // State to handle server errors (or unexpected response formats)
  const [serverError, setServerError] = useState<string | null>(null);

  // State to manage the list of portfolio items (strings)
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  /**
   * Updates the search state with the current input value
   * @param e - ChangeEvent<HTMLInputElement> from the input field
   */
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  /**
   * Adds a new portfolio item if it doesn't already exist
   * @param e - Event triggered by form submission
   */
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();

    // Check if the portfolio item already exists
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return; // Prevent duplicates

    // Add the new portfolio item to the state
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  /**
   * Handles search form submission, fetches company data from API
   * @param e - SyntheticEvent triggered by form submission
   */
  const onSearchSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();

      // Call the search API with the current search term
      const result = await searchCompanies(search);

      // Handle the API response based on its type
      if (typeof result === "string") {
        setServerError(result); // If result is a string, it's an error message
      } else if (Array.isArray(result)) {
        setSearchResult(result); // Assuming result is an array of CompanySearch objects
      } else {
        setServerError("Unexpected response format.");
      }
    } catch (error) {
      // Set error state if API call fails
      setServerError("An error occurred while fetching data.");
      console.error("Error in onSearchSubmit:", error);
    }
  };

  /**
   * Removes a portfolio item from the state
   * @param e - Event triggered by form submission
   */
  const onPortfolioDelete = (e: any) => {
    e.preventDefault();

    // Filter out the portfolio item to be removed
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  return (
    <>
      {/* Render the Search component and pass necessary props */}
      <Search
        onClick={onSearchSubmit}
        search={search}
        onSearchSubmit={onSearchSubmit}
        handleSearchChange={handleSearchChange}
      />

      {/* Render the ListPortfolio component to display the portfolio items */}
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />

      {/* Display server error if one exists */}
      {serverError && <h1>{serverError}</h1>}

      {/* Render the CardList component to display search results */}
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </>
  );
};

export default SearchPage;
