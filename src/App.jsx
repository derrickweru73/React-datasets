import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import './App.css';

const initialMovies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010, genre: 'Sci-Fi' },
  { id: 2, title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008, genre: 'Action' },
  { id: 3, title: 'Interstellar', director: 'Christopher Nolan', year: 2014, genre: 'Sci-Fi' },
  { id: 4, title: 'Parasite', director: 'Bong Joon Ho', year: 2019, genre: 'Drama' }
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);

  const handleAddMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>🎬 CineTrack</h1>
        <p>Your Personal Movie Database</p>
      </header>
      <main className="main-content">
        <MovieForm onAddMovie={handleAddMovie} />
        <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />
      </main>
    </div>
  );
}
