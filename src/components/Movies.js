import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
        <div>
          <b>Title: <span>{movie.title}</span></b>
          <br></br>
          Time: <span>{movie.time}</span>
          <br></br>
          Genres: <ul>
            {movie.genres.map( (g, index) => (<li key={index}>{g}</li>))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
