import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div>
          <b>Name: <span>{actor.name}</span></b>
          <br></br>
          Movies: <ul>
            {actor.movies.map( (movie, index) => (<li key={index}>{movie}</li>))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
