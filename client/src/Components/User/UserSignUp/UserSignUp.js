import React, { useState } from 'react'
import './UsersignUp.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
function Usersignup() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobileNo,setMobleNo]=useState()
    const [password,setPassword]=useState("")
    const [errMessage,setErrMessage]=useState("")
    const dispatch=useDispatch()

    function validationErr(){
        if(email.trim()==="" || name.trim()==="" || password.trim()==="" || mobileNo.trim()===""){
            return false
        }
        return true
    }
    async function handleSubmit(){
        let {data} = await axios.post('/user/signup',{name,email,mobileNo,password})
        if(data.error){
            setErrMessage(data.message)
       
        }else{
         dispatch({type:"refresh"})   
        }
    }
  return (
    
    <div className='user-signup'>
    <div className="signup">
    <div className="signup-head">
    <h2>signup Here</h2>
    {
        errMessage&& <b className='err-message'>{errMessage}</b>
    }
    </div>
    <div className="signup-form">
    <input type="text" placeholder='username' value={name} onChange={(e)=>setName(e.target.value)} />
    <input type="text" placeholder='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="tel" placeholder='mobile-no' value={mobileNo} onChange={(e)=>setMobleNo(e.target.value)}/>
    <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button disabled={!validationErr()} onClick={handleSubmit}>Submit</button>
    </div>
    <div className="signup-options">
    <p>Already Have an account</p>
    <Link to= '/signup'>Login here</Link>
    </div>
    </div>
    </div>
  )
}

export default Usersignup
