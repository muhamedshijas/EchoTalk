
import React, { useEffect }  from 'react'
import './App.css';
import axios from 'axios'
import { Navigate, Route, Routes } from 'react-router-dom';
import UserLoginPage from './Pages/UserLoginPage';
import UserSignUpPage from './Pages/UserSignUpPage';
import { useDispatch, useSelector } from 'react-redux';
import UserHomePage from './Pages/UserHomePage';
import UserAvatar from './Components/User/UserAvatar/UserAvatar';
import UserChatPage from './Pages/UserChatPage';
function App() {
  
  axios.defaults.withCredentials=true;
  axios.defaults.baseURL="http://localhost:5000/"


  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<UserHomePage/>}/>
     <Route path='/chats' element={<UserChatPage/>}/>
  
     </Routes>
    </div>
  );
}

export default App;
