import React, { useState } from 'react';

export default function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('Sci-Fi');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !director || !year) return;

    onAddMovie({
      id: Date.now(),
      title,
      director,
      year: parseInt(year),
      genre
    });

    setTitle('');
    setDirector('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <h2>Add a New Movie</h2>
      <input 
        type="text" placeholder="Movie Title" value={title} 
        onChange={(e) => setTitle(e.target.value)} required 
      />
      <input 
        type="text" placeholder="Director" value={director} 
        onChange={(e) => setDirector(e.target.value)} required 
      />
      <input 
        type="number" placeholder="Release Year" value={year} 
        onChange={(e) => setYear(e.target.value)} required 
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
      </select>
      <button type="submit" className="add-btn">Add Movie</button>
    </form>
  );
}
