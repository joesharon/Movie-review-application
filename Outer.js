import React, { useState } from 'react'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SearchIcon from '@mui/icons-material/Search';
import logo from './Img/logo.jpg'
import { Link, Outlet } from 'react-router-dom'
import './Outer.css'
export const Outer = () => {
  const [searchQuery, setSearchQuery] = useState();
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission (if using a form)
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=2e3ca7f46f064a5287d18b21277f0f99`
      );
      const data = await response.json();
      // Handle the API response (e.g., display search results)
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  
  return (
    <div style={{marginTop:'0',paddingtop:'1000px'}}>
    
   <nav className='div-out' >
   <ul className='ul'>
   <div className='rty'>
   <div className='sd'>
   <Link to='/Main' className='link'>
    <li className='rr'><img src={logo} height={'70px'} width={'150px'}/></li>
    </Link>
    </div>
    <div className='pol'>
  <Link to='/serch' className='link'>
  <li>
  
  <button className='t6'>SEARCH MOVIES</button>
  </li>
  </Link>
    <Link to='/' className='link'>
    <li className='wpo'>SIGN-IN</li>
    </Link>
    <Link to='/register' className='link'>
    <li className='wpo'>CREATE ACCOUNT</li>
    </Link>
    <Link to='/Main' className='link'>
    <li className='wpo'>HOME</li>
    </Link>
    <Link to='/Trending' className='link'>
    <li className='wpo'>TRENDING</li>
    </Link>
    <Link to='/explore' className='link'>
    <li className='wpo'>EXPLORE</li>
    </Link>
    <Link to='/Content' className='link'>
    <li className='wpo'>FEEDBACK</li>
    </Link>
    </div>
    </div>
    </ul>
    </nav>
    
    
    <Outlet/>
    </div>
  )
}
export default Outer
