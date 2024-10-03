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
    <div>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange}></input>
      </form>
      <button onClick={(e) => onClick(e)}>Search</button>
    </div>
  );
};

export default Search;
