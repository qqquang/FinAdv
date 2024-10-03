import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  // get data from input and display in the console
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = async (e: SyntheticEvent) => {
    try {
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
      console.error("Error in onClick:", error);
    }
  };
  

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult}/>
    </div>
  );
}

export default App;
