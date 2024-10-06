import axios from "axios";
import {
  CompanySearch,
  CompanyProfile,
  CompanyKeyMetrics,
  CompanyIncomeStatement,
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyCompData,
  CompanyTenK,
} from "./company";

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

/**
 * Fetches the profile of a specific company based on the provided query (ticker symbol).
 * Makes a GET request to an external API to retrieve the company key metrics.
 *
 * @param query - The ticker symbol used to identify the company.
 * @returns An array of CompanyKeyMetrics objects or undefined in case of an error.
 */
export const getKeyMetrics = async (query: string) => {
  try {
    // Make a GET request to the API to fetch the company profile
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`,
    );

    // Return the profile data
    return data;
  } catch (error: any) {
    // Log the error message for debugging
    console.log("Error message from API: ", error.message);
  }
};

/**
 * Fetches the profile of a specific company based on the provided query (ticker symbol).
 * Makes a GET request to an external API to retrieve the company income statement.
 *
 * @param query - The ticker symbol used to identify the company.
 * @returns An array of CompanyKeyMetrics objects or undefined in case of an error.
 */
export const getIncomeStatement = async (query: string) => {
  try {
    // Make a GET request to the API to fetch the company profile
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`,
    );

    // Return the profile data
    return data;
  } catch (error: any) {
    // Log the error message for debugging
    console.log("Error message from API: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${process.env.REACT_APP_API_KEY}`,
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${process.env.REACT_APP_API_KEY}`,
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getTenK = async (query: string) => {
  try {
    const data = await axios.get<CompanyTenK[]>(
      `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${process.env.REACT_APP_API_KEY}`,
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
