import React, { useState } from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, onDeleteMovie }) {
  const [filter, setFilter] = useState('All');

  const filteredMovies = filter === 'All' 
    ? movies 
    : movies.filter(movie => movie.genre === filter);

  return (
    <div className="list-container">
      <div className="filter-bar">
        <label>Filter by Genre: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
      </div>

      <div className="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieItem 
              key={movie.id} 
              movie={movie} 
              onDelete={onDeleteMovie} 
            />
          ))
        ) : (
          <p className="no-movies">No movies found in this genre.</p>
        )}
      </div>
    </div>
  );
}
