import React, { useState } from 'react'
import './UserLogin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
function UserLogin() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errMessage,setErrMessage]=useState("")
    const dispatch= useDispatch()
    function validationErr(){
        if(email.trim()===""|| password.trim()===""){
            return false
        }
        return true
    }

    async function handleSubmit(){
        let {data}=await axios.post('/user/login',{email,password})
        if(data.error){
            setErrMessage(data.message)
        }else{
            console.log(data)
         dispatch({type:"refresh"})   
        }
    }
  return (
    <div className="login">
    <div className="login-head">
    <h2>Login Here</h2>
    {
        errMessage&& <b className='err-message'>{errMessage}</b>
    }
    </div>
    <div className="login-form">
    <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button disabled={!validationErr()} onClick={handleSubmit}>Submit</button>
    </div>
    <div className="signup-ptions">
    <p>Don't You have an account</p>
    <Link to= '/signup'>signup here </Link>
    </div>
    </div>
  )
}

export default UserLogin
