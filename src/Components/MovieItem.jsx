import React from 'react';

export default function MovieItem({ movie, onDelete }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <span className={`genre-badge ${movie.genre.toLowerCase()}`}>
        {movie.genre}
      </span>
      <button className="delete-btn" onClick={() => onDelete(movie.id)}>
        Delete
      </button>
    </div>
  );
}
