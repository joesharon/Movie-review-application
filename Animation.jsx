// MovieList.js
import StarRateIcon from '@mui/icons-material/StarRate';
import React, { useState, useEffect } from 'react';
import { width } from '@mui/system';
import { Link } from 'react-router-dom';
function Animation() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?api_key=2e3ca7f46f064a5287d18b21277f0f99&with_genres=16'
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

  return (
      
    <div className="movie-list">
    <div>
      <h1 style={{backgroundColor:'yellowgreen'}}>Animation</h1>
      <center></center>
      </div>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
        <Link to={`/Deci?id=${movie.id}`} >
        <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}height={"250px"}
        alt={movie.title}
        />
        <u><h5>{movie.title}</h5></u>
       <div className='tuy'>
       
       <div>
       <h5>Rating : {movie.vote_average}<span style={{paddingTop:'2000px'}}></span>
       </h5>
       </div>
        </div>
        </Link>
        </div>
    ))}
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <center><Link to='/explore'><button height="50px" style={{backgroundColor:'greenyellow'}}>Back to Explore</button></Link></center>
    </div>
    </div>
    
  );
}

export default Animation;
