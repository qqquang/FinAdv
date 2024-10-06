import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashflowStatement from "../Components/CashflowStatement/CashflowStatement";

// Define the application's routes using React Router's createBrowserRouter
export const router = createBrowserRouter([
  {
    // Main root path ("/"), renders the App component as the layout
    path: "/",
    element: <App />,

    // Define nested routes (children) for different pages within the App component
    children: [
      {
        // Home page route ("/")
        path: "",
        element: <HomePage />,
      },
      {
        // Search page route ("/search")
        path: "search",
        element: <SearchPage />,
      },
      {
        // Design guide page route ("/design-guide")
        path: "design-guide",
        element: <DesignPage />,
      },
      {
        // Dynamic route for company details ("/company/:ticker")
        // ":ticker" is a URL parameter that represents a specific company
        path: "company/:ticker",
        element: <CompanyPage />,

        // Nested routes within the CompanyPage component
        children: [
          {
            // Route for displaying the company profile ("/company/:ticker/company-profile")
            path: "company-profile",
            element: <CompanyProfile />,
          },
          {
            // Route for displaying the income statement ("/company/:ticker/income-statement")
            path: "income-statement",
            element: <IncomeStatement />,
          },
          {
            // Route for displaying the company profile ("/company/:ticker/balance-sheet")
            path: "balance-sheet",
            element: <BalanceSheet />,
          },
          {
            // Route for displaying the company profile ("/company/:ticker/balance-sheet")
            path: "cashflow-statement",
            element: <CashflowStatement />,
          },
        ],
      },
    ],
  },
]);
