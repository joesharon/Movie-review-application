import React,{useState}from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './Feedback.css'
const Feedback=()=> {
    const [Name, setName] = useState('')
    const [Ename, setEname] = useState('')
    const FormValue =()=>{
        alert('Thank For Your FeedBack: ' + Name)
      }
    const NameValue=(e)=>{
        setName(e.target.value)
        console.log(Name)
      }
      const EnameValue=(q)=>{
        setEname(q.target.value)
        console.log(Ename)
      }
    return (
        <>
        <div id="feed">
        <div>
        <br></br>
        <center>
        <form id= "f1" onSubmit={FormValue}>
        <fieldset id= "field" style={{width:'420px'}}>
       <h1 style={{paddingLeft:'17px'}}>Feedback About Us...</h1>
        <tr>
        <td><label><b>Name: </b></label></td>
        <td ><input id="in" type='text' placeholder='Enter Your Name' onChange={NameValue} required></input></td>
        </tr>
        <tr>
        <td><label><b>Email Address: </b></label></td>
        <td ><input id="in" type='email' placeholder='Enter Email' onChange={EnameValue} required></input></td>
        </tr>
        <br></br>
        <tr>
        <td><b>Content : </b></td>
        <td id="star"><Rating  size="large" /></td>
        </tr>
        <tr>
        <td><b>Accuracy : </b></td>
        <td id="star"><Rating  size="large" /></td>
        </tr>
        <tr>
        <td><b>Handy : </b></td>
        <td id="star"><Rating  size="large" /></td>
        </tr>
        <tr>
        <td><b>Overall: </b></td>
        <td id="star"><Rating  size="large" /></td>
        </tr>
        <tr>
        <td><b>Suggestions :  </b></td>
        </tr>
        <tr>
        <td></td>
        <textarea cols={22} rows={6} required></textarea>
        </tr>
        <br></br>
        <tr>
        <td><button  id="butt" type='submit'><b>Post Comment</b></button></td>
        </tr>
        </fieldset>
        </form>
        </center>
        </div>
        </div>
        </>
    );
  }
  export default Feedback
