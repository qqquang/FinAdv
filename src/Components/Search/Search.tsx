import React, {
  ChangeEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
} from "react";

interface Props {
  onClick: (e: SyntheticEvent) => void;
  // State could be undefined a lot
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onClick,
  search,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => onClick(e)}>Click</button>
    </div>
  );
};

export default Search;
