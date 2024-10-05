import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashBoard from "../../Components/CompanyDashBoard/CompanyDashBoard";
import Tile from "../../Components/Tile/Tile";

interface Props {}

// Component for displaying detailed information about a company
const CompanyPage = (props: Props) => {
  // Extract 'ticker' parameter from the URL using useParams hook
  let { ticker } = useParams();

  // State to store the company's profile data
  const [company, setCompany] = useState<CompanyProfile>();

  // useEffect to fetch company profile data when the component mounts
  useEffect(() => {
    const getProfileInit = async () => {
      // Fetch company profile using the 'ticker' parameter
      const result = await getCompanyProfile(ticker!);

      // Update the state with the fetched company data
      setCompany(result?.data[0]);
    };

    getProfileInit();
  }, [ticker]); // Dependency array includes 'ticker' to refetch if it changes

  return (
    <>
      {company ? (
        // Render the company information if data is available
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashBoard>
            {/* Display company name in a Tile component */}
            <Tile title="Company Name" data={company.companyName} />
          </CompanyDashBoard>
        </div>
      ) : (
        // Display a fallback message if company data is not found
        <div>Company not found</div>
      )}
    </>
  );
};

export default CompanyPage;
