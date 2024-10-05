import axios from "axios";
import { CompanySearch, CompanyProfile } from "./company";

// Interface defining the structure of the search response data
interface SearchResponse {
  data: CompanySearch[];
}

/**
 * Fetches a list of companies based on the search query.
 * Makes a GET request to an external API to retrieve company information.
 *
 * @param query - The search term used to filter companies.
 * @returns An array of CompanySearch objects or an error message.
 */
export const searchCompanies = async (query: string) => {
  try {
    // Make a GET request to the API with the search query
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`,
    );

    // Return the data array from the response
    return response.data;
  } catch (error) {
    // Handle Axios errors specifically
    if (axios.isAxiosError(error)) {
      console.log("Error message: ", error.message);
      return error.message;
    } else {
      // Handle unexpected errors
      console.log("Unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};

/**
 * Fetches the profile of a specific company based on the provided query (ticker symbol).
 * Makes a GET request to an external API to retrieve the company profile.
 *
 * @param query - The ticker symbol used to identify the company.
 * @returns An array of CompanyProfile objects or undefined in case of an error.
 */
export const getCompanyProfile = async (query: string) => {
  try {
    // Make a GET request to the API to fetch the company profile
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`,
    );

    // Return the profile data
    return data;
  } catch (error: any) {
    // Log the error message for debugging
    console.log("Error message from API: ", error.message);
  }
};
