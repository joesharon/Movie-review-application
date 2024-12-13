import React from 'react'
import './Card.css';
import { Link, Outlet } from 'react-router-dom'
const Card = (props) => {
  return (
  <div className='iu'>
   <Link to='/Deci' className='link'>
   <li className='wpo'><div className='out'><div className='in1'><img className='img1' src={props.ul} height="px"></img></div>
   <div className='in2'><h3 className='hc'>{props.name}</h3>
   <p className='p1'>{props.pi}<span className='re'>Read More</span></p></div></div>
   </li>
   </Link>
   </div>
   
  )
}

export default Card