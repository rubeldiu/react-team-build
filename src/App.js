import './App.css';
import {useEffect, useState} from 'react'
import User from './components/User';

function App() {
  const [users,setUsers]=useState([]);
  const [team,setTeam]=useState([]);
  const fetchUser=async ()=>{
    try {
      const response= await fetch("https://randomuser.me/api/?results=15");
      const data=await response.json();
      console.log(data)
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    fetchUser();
  },[])

  const addTeam=(name)=>{
    setTeam([...team,name]);
  }
  return (
    <div>
      <h1>Team Builder</h1>
      <h2>Total : {team.length}</h2>
      <ul>
        {team.map((m,index)=><li key={index}>{m}</li>)}
      </ul>
      {
        users.map((user)=>{
          return <User key={user.id.value} {...user} addTeam={addTeam}/>
        })
       
      }
      
    </div>
  );
}

export default App;
