import React from "react";
import { testIncomeStatementData } from "./testData";
import { v4 as uuidv4 } from "uuid";
const data = testIncomeStatementData;

interface Props {}

type Company = (typeof data)[0];  // Company type is the first element of the data array 

const configs = [
   { 
      label: "Year",
      render: (company: Company) => company.acceptedDate,
    },
		{
			label: "Cost of Revenue",
			render: (company: Company) => company.costOfRevenue,
		}
]

const Table = (props: Props) => {

	const renderedRows = data.map((company) => {
		return(
			<tr key={uuidv4()}>
				{configs.map((val: any) => {
					return (
					<td key={uuidv4()} className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
						{val.render(company)}
					</td>
					)
				})}
			</tr>
		);
	});

	const renderedHeaders = configs.map((config: any) => {
		return (
			<th key={config.label} className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				{config.label}
			</th>
		)
	});
	return(
		<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
			<table className="min-w-full divide-y divide-gray-200 m-5">
				<thead className="bg-gray-50">
					<tr>{renderedHeaders}</tr>
				</thead>
				<tbody>{renderedRows}</tbody>
			</table>
		</div>
	)
}

export default Table;
