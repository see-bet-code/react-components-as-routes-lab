import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div>
          <b>Name: <span>{director.name}</span></b>
          <br></br>
          Movies: <ul>
            {director.movies.map( (movie, index) => (<li key={index}>{movie}</li>))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
