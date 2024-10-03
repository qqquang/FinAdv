import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio'
import {v4 as uuidv4} from "uuid";

interface Props {
    porfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({porfolioValues, onPortfolioDelete}: Props) => {
  return (
    <>
        <h3>My Portfolio</h3>
        <ul>
            {porfolioValues && 
                porfolioValues.map((porfolioValue) => {
                return <CardPortfolio portfolioValue={porfolioValue} key={uuidv4()} onPortfolioDelete={onPortfolioDelete} />;
            })}
        </ul>
    </>
  )
}

export default ListPortfolio