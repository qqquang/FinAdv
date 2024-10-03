import React, { SyntheticEvent } from 'react'

interface Props {
  onPortFolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({onPortFolioCreate, symbol}: Props) => {
  return (
    /* <button onClick={onPortFolioCreate} type="submit">Add to Portfolio</button> */

    
    <form onSubmit={onPortFolioCreate}>
      <input readOnly={true} hidden={true} value={symbol} /> 
      <button type="submit">Add to Portfolio</button>

    </form>
  )
}

export default AddPortfolio