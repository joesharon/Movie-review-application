// Search.js
import StarRateIcon from '@mui/icons-material/StarRate';
import React, { useState, useEffect } from 'react';
import './Ser.css'
import { width } from '@mui/system';
import { Link } from 'react-router-dom';

function Search() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/search/movie?query=fight+club&api_key=2e3ca7f46f064a5287d18b21277f0f99'
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
  }, []);
const ch=()=>{
  
}
  return (
      
    <div className="movie-list">
    
        <h1>jhdjhdjhjdhdjhjdh</h1>
    
   
    </div>
    
  );
}

export default Search;
