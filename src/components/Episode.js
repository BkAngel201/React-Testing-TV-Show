import React from 'react';
import parse from 'html-react-parser';
import { Link, useParams } from 'react-router-dom'

export default function Episode (props) {
    const param = useParams()
    console.log(param);
  return (
    <div className="episodes">
        
      {
        props.episodes.filter(e => {
            return parseInt(e.number) === parseInt(param.episodeNum)
        })
        .map(e => (
        <>
           
            <div className="episode" key={e.id} data-testid="episode">
            {e.image && (
              <img className="episode-image" src={e.image.medium} alt={e.name} />
            )}
            <div className="episode-info">
              <p className="episode-number">
                Season {e.season}, Episode {e.number}
              </p>
              <h3>{e.name}</h3>
              {e.summary && parse(e.summary)}
              <div className="flex-spacer" />
              <p className="episode-runtime">{e.runtime} minutes</p>
            </div> 
            <Link to="/">Go Back</Link>
          </div>
        </>
      ))}
    </div>
  );
}
