import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [porfolioValues, setPortfolioValues] = useState<string[]>([]);

  // get data from input and display in the console
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = porfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPorfolio = [...porfolioValues, e.target[0].value];
    setPortfolioValues(updatedPorfolio);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      const result = await searchCompanies(search);

      if (typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result)) {
        setSearchResult(result); // Assuming result is already the array of CompanySearch
      } else {
        setServerError("Unexpected response format.");
      }
    } catch (error) {
      setServerError("An error occurred while fetching data.");
      console.error("Error in onSearchSubmit:", error);
    }
  };
  
  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = porfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  }

  return (
    <div className="App">
      <Search onClick={onSearchSubmit} search={search} onSearchSubmit={onSearchSubmit} handleSearchChange={handleSearchChange}/>
      <ListPortfolio porfolioValues={porfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
