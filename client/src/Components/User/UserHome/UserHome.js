import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'

function UserHome() {
    const dispatch= useDispatch()
    async function handleLogout(e){
        await axios.get("/user/logout")
        dispatch({type:"refresh"})
    }
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserHome
