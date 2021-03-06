import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {
   const suggestNameJsx = suggestedNames.map(suggestedName => {
       return <NameCard suggestedName={suggestedName}/>
   })

    return (
        <div class="results-container">
            {suggestNameJsx}
        </div>
    )
}

export default ResultsContainer;