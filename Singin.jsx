import React, { useEffect } from 'react'
import {useState}from 'react'
import './Signin.css';
import { Link } from 'react-router-dom';
function Singin() {
  const [Ename, setEname] = useState('')
  const [pass, setPass] = useState('')
  const [login, setLogin] = useState(true)
  const enter=()=>
  {
    alert("Login Successful , Welcome "+Ename);
  }
 
  const ret=(e)=>{
   setEname(e.target.value)
  }
  const passw=(e)=>{
   setPass(e.target.value)
  }
  useEffect(() => {
    if(Ename.length >0 && pass.length >4){
      setLogin(false)
    }else{
      setLogin(true)
    }
  })
  return (
    
               <div className='out1'>
               <br></br>
               <br></br>
               <div className='e1'>
               <form>
               <br></br>
               <h1><b>SignIn.. </b></h1>
                   <br></br>
                   <table>
                   <tr>
                   <th>
                   <label className="j1"><b>USER ID :  </b></label>
                   </th>
                   <td>
                   <input className='frfg' type="text" placeholder="Enter your user id" onChange={ret} required></input>
                   </td>
                   </tr>
                   <br></br>
                   <br></br>
                   
                   
                   <tr>
                   <th>
                   <label className="ert" ><b>PASSWORD :  </b></label>
                   </th>
                   <td>
                   <input type="password" placeholder="Enter your password" onChange={passw} required></input>
                   </td>
                   </tr>
                   <br></br>
                   <br></br>
                   <br></br>
                   </table>
                   
                   
                   <Link to='/Main'><button type="Submit" className="t1" onClick={enter} disabled={login}><b>Submit</b></button></Link>
                   <br></br>
                   <h2 className="q1"><b>Don't have an account?</b></h2>
                   
              <br></br>
              <Link to='/register'>Register here</Link>
              
              </form>
              </div>
              </div>
             
  
  )
}

export default Singin