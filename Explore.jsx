import React from 'react'
import './Explore.css'
import MoodIcon from '@mui/icons-material/Mood';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import { Link, Outlet } from 'react-router-dom'
const Explore = () => {
  return (
      <div className='frt'>
      <br></br>
      <br></br>
      <div className='ll'>
    
    <Link to='/Action' className='link'>
    <h1><SportsKabaddiIcon/>Action</h1></Link>
    
    <Link to='/comedy' className='link'>
   <h1>Comedy</h1></Link>
   
   <Link to='/crime' className='link'>
   <h1>Crime</h1></Link>
   
   
   <Link to='/fantasy' className='link'>
   <h1>Fantasy</h1></Link>
   
   <Link to='/horror' className='link'>
   <h1>Horror</h1></Link>
   </div>
   
   <div className='kk'>
   <Link to='/mystery' className='link'>
   <h1>Mystery</h1></Link>
    <Link to='/romance' className='link'>
    <h1>Romance</h1></Link>
    <Link to='/scifi' className='link'>
    <h1>Sci-Fi</h1></Link>
    <Link to='/thriller' className='link'>
    <h1>Thriller</h1></Link>
    <Link to='/animation' className='link'>
    
    <h1>Animation</h1></Link>
    
    </div>
    </div>
)
}

export default Explore