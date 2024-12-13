// Deci.js
import React, { useState, useEffect } from 'react';
import TryIcon from '@mui/icons-material/Try';
import { Link, useLocation } from 'react-router-dom';
import './Deci.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { linearProgressClasses } from '@mui/material';

function Deci() {
  const Value = () =>{
    alert('Your Review is been Recorded')


}
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get('id');
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details based on the movie ID
        // Replace this with your own data source or API call
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=2e3ca7f46f064a5287d18b21277f0f99`
        );
        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data); // Store all movie details
        } else {
          console.error('Error fetching movie details');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className='ref'>
    <br></br>
    <br></br>
    <br></br>
    <div className='flk'>
    <div className='tlk'>
    <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} height={'490px'} style={{borderRadius:'25px 0px 0px 25px'}}
    alt={movieDetails.title}/>
    </div>
    <div className='ylk'>
    <h1 className='ion'>{movieDetails.title}</h1>
    <h2 className='lpo'>Overview:</h2> 
    <h3>{movieDetails.overview}</h3>
    <h3>Release Date: {movieDetails.release_date}</h3>
    <h3>Rating: {movieDetails.vote_average}</h3>
    <h3>Voters: {movieDetails.vote_count}</h3>
    </div>
    </div>
    
    
    <br></br>
    <br></br>
    <div className='qp'>
    <div>
    <h1 style={{paddingLeft:'30px'}}>Post Your Rating :</h1>
    <div className='pt'>
    <div>
    <h3>ACTING : </h3>
    </div>
    <div className='tp'>
    <Rating  name="size-large" defaultValue={0} size="large" required />
    </div>
    </div>
    <div className='pt'>
    <div>
    <h3>MUSIC : </h3>
    </div>
    <div className='tp'>
    <Rating  name="size-large" defaultValue={0} size="large" requiredd/>
    </div>
    </div>
    <div className='pt'>
    <div>
    <h3>DIRECTION : </h3>
    </div>
    <div className='tp'>
    <Rating  name="size-large" defaultValue={0} size="large" required/>
    </div>
    </div>
    <div className='pt'>
    <div>
    <h3>CINEMATOGRAPHY : </h3>
    </div>
    <div className='tp'>
    <Rating  name="size-large" defaultValue={0} size="large" required/>
    </div>
    </div>
    <div className='pt'>
    <div>
    <h3>PRODUCTION DESIGN : </h3>
    </div>
    <div className='tp'>
    <Rating  name="size-large" defaultValue={0} size="large" required/>
    </div>
    </div>

    </div>
    <div className='gj'>
    <br></br>
    <div className='pt'>
    <div>
    <h3 style={{backgroundColor:'thistle'}}>OVERALL RATING : </h3>
    </div>
    <div className='p'>
    <Rating  name="size-large" defaultValue={0} size="large" required/>
    </div>
    </div>
    <form>
    <h2>Write your review:</h2>
    <textarea className='wsx' placeholder='write your review' required></textarea>
    <br></br>
    <br></br>
    <center> <Link to='/Trending'><input type='submit' onClick={Value}/></Link></center>
    </form>
    </div>

    </div>
    </div>
  );
}

export default Deci;
