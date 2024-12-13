import React, { useState, useEffect } from 'react';
import './Serch1.css'
import { Link } from 'react-router-dom';
const Serch1 = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Default search query

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=2e3ca7f46f064a5287d18b21277f0f99`
        );
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
        } else {
          console.error('Error fetching movie data');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchMovies();
  }, [searchQuery]); // Fetch movies whenever searchQuery changes

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query when input changes
  };

  return (
    <div className='u7'>
      <input className='p0'
        type="search"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange} 
      />
      <br></br>
      {/* Display movie titles */}
      <div className='iop'>
      {movies.map((movie) => (
          <div key={movie.id}>
          <Link to={`/Deci?id=${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} height={"250px"} alt={movie.title} />
          <h5>{movie.title}</h5>
          <div>
          <h5>Rating : {movie.vote_average}<span style={{paddingTop:'2000px'}}></span>
          </h5>
          </div>
          </Link>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Serch1;
