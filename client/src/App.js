
import React, { useEffect }  from 'react'
import './App.css';
import axios from 'axios'
import { Navigate, Route, Routes } from 'react-router-dom';
import UserLoginPage from './Pages/UserLoginPage';
import UserSignUpPage from './Pages/UserSignUpPage';
import { useDispatch, useSelector } from 'react-redux';
import UserHomePage from './Pages/UserHomePage';
import UserAvatar from './Components/User/UserAvatar/UserAvatar';
function App() {
  
  axios.defaults.withCredentials=true;
  axios.defaults.baseURL="http://localhost:5000/"

  const {user,refresh}=useSelector((state)=>{
    return state
  })

  const dispatch= useDispatch()
  useEffect(()=>{
    (async function(){
      let {data}=await axios.get("user/check")
      dispatch({type:"user",payload:{login:data.loggedIn,detials:data.user}})
    })()
  },[refresh])
  return (
    <div className="App">
     <Routes>
     {
      user.login &&
      <>
      <Route path='/' element={<UserHomePage/>}/>
      <Route path='/login' element ={<Navigate to='/'/>}/>
      <Route path='/signUp'  element ={<Navigate to='/'/>}/>

      </>
     }

     user.login===false &&
     <>
     <Route path='/login' element={<UserLoginPage/>}/>
     <Route path='/signup' element={<UserSignUpPage/>}/>
     <Route path='/' element={<Navigate to='/login'/>}/>
     </>
  
     </Routes>
    </div>
  );
}

export default App;
