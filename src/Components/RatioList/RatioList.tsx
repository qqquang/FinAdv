import { v4 as uuidv4 } from "uuid";
import { TestDataCompany } from "../Table/testData";

// Define the props for the RatioList component (currently empty)
interface Props {
  config: any;
  data: any;
}

// Functional component for rendering a list of ratios or company attributes
const RatioList = ({config, data}: Props) => {
  // Map through the 'configs' array to generate list items
  const renderedRows = config.map((row: any) => {
    return (
      <li key={uuidv4()} className="py-3 sm:py-4"> {/* Generate a unique key for each list item */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            {/* Display the label for the current configuration */}
            <p className="text-sm font-medium text-gray-900 truncate">
              {row.label}
            </p>
            {/* Display the subtitle if it exists */}
            <p className="text-sm text-gray-500 truncate">
              {row.subTiltle && row.subTiltle}
            </p>
          </div>
          {/* Render the company data using the 'render' function defined in the configuration */}
          <div className="inline-flex items-center text-base font-semibold text-gray-900">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 w-full">
      <ul className="divide-y divide-gray-200">{renderedRows}</ul>
    </div>
  );
};

export default RatioList;
