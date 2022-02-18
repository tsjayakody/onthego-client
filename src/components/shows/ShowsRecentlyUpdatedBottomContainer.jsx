import React from 'react'
import shows from '../../data/Shows';
import ShowsAlphabeticalColumnList from '../shows/ShowsAlphabeticalColumnList';

function ShowsRecentlyUpdatedBottomContainer() {
  return (
    <div>
        {shows.map((item)=>(
            <ShowsAlphabeticalColumnList 
                key={item.letter} 
                letter={item.letter} 
                list={item.showsList}
            />
        ))}
    </div>
  )
}

export default ShowsRecentlyUpdatedBottomContainer 