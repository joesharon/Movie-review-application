import React, { useEffect, useState } from 'react'
import './Register.css'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
const Register = () => {
  const [name,setName] = useState("");
  const [mail,setMail] = useState("");
  const [pass,setPass] = useState("");
  const [con,setCon] = useState("");
  const [login,setLogin] = useState(true)
  const tre=()=>{
    alert("Registered Successfully")
  }
  useEffect(() => {
    if(name.length > 0 && mail.length>0 && pass.length>4 && con.length>4 ){
      setLogin(false);
    }else{
      setLogin(true);
    }
  })
  return (
   
    <>
    <div class="pon">
    <form class="i">
    <br></br>
    <center><h1 class="uy">Sign up</h1>
    <br></br>
    
    <label className="uy"><b>NAME :  </b></label>
               <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}  required></input>
               <br></br>
               <br></br>
               <br></br>
    <label className="uy"><b>E_MAIL :  </b></label>
               <input type="email" placeholder="Enter Your E-mail" onChange={(e) => setMail(e.target.value)} required></input>
               <br></br>
               <br></br>
               <br></br>
               
               <label className="uy"><b>PASSWORD :  </b></label>
               <input className='ri1' type="password" placeholder="Enter your password" onChange={(e) => setPass(e.target.value)} required></input>
               <br></br>
               <br></br>
              <br></br>
              <label className="uy"><b>CONFIRM PASSWORD :  </b></label>
               <input type="password" placeholder="Re-Enter your password" onChange={(e) => setCon(e.target.value)} required></input>
              <br></br>
              <br></br>
              <br></br>
             
              <Link to  ='/main'><button class="re" type='submit' onClick={tre} disabled={login}>REGISTER</button></Link>
              </center>
              </form>
              </div>
              </>
              
  )
}

export default Register