import React from 'react'
import './Main.css';
import { Link } from 'react-router-dom';
const Main = () => {
  return (

    <div className='oiu'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <center>
    <div className='pyt'>
    <br></br>
   
    <h1 className='hnh'><b>JETIX WELCOMES YOU!!</b></h1>
    
    <h3>
    "A film is - or should be - more like music than</h3>
     <h3> like fiction. It should be a progression of moods </h3>
      <h3>and feelings. The theme, what's behind the </h3>
      <h3>emotion, the meaning, all that comes later."</h3>

<h3>- Stanley Kubrick
    </h3>
    </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <Link to='/explore'><button style={{backgroundColor:'yellow'}}>--->EXPLORE</button></Link>
    </center>
    </div>
  
  )
}

export default Main