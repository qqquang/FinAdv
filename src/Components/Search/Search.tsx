import React, {
  ChangeEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
} from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: SyntheticEvent) => void;
  // State could be undefined a lot
  search: string | undefined;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  handleSearchChange,
  onClick,
  search,
}: Props): JSX.Element => {
  return (
      <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-0 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black placeholder-opacity-25 focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
        <button 
            className="p-2 border-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
            onClick={(e) => onClick(e)}>Search</button>
      </div>
      
    </section>
  );
};

export default Search;
