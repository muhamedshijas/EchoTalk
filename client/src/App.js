
import React ,{useState} from 'react'
import './App.css';
import axios from 'axios'
function App() {
  const [name, setName] = useState("")
  async function handleSubmit(e){
    e.preventDefault();
    let data=await axios.post('/login',{name})
    console.log(data)
    console.log("sent")
  }
  axios.defaults.withCredentials=true;
  axios.defaults.baseURL="http://localhost:5000/"
  return (
    <div className="App">
     <input type="text" name="" id=""  value={name} onChange={(e)=>setName(e.target.value)}/>
     <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
