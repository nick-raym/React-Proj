import logo from './logo.svg';
import './App.css';
import SetField from './field';
import SubmitPoints from './submitPoints';
import Info from './gameInfo';
import { useContext, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';


function App() {

  const [users,setUsers]=useState([])
  const [username,setUsername]=useOutletContext()
  console.log(username)
  const [userInfo,setUserInfo]=useState({})
  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then((response)=>response.json())
    .then((users)=>{setUsers(users)})
  },[])

  // useEffect(()=>{
  //   let thisUsername=users.filter((user)=>user.username.toLowerCase()==username.toLowerCase())
  //   console.log(thisUsername.username)
  //   setUserInfo(thisUsername)

  // },[username])

  const [wager,setWager]=useState(0)
  const [roundScore,setRoundScore] = useState(0)
  const multArray=[.25,.5,.75,1,1.25,1.5,1.75,2]
  const [mult,setMult]=useState(1)

  function handleWager(event){
    event.preventDefault()
    setWager(event.target.wager.value)
  }
  function handleChangeMult(event){
    event.preventDefault()
    console.log(event.target.mults.value)
    setMult(event.target.mults.value)
  }
  return (
    <div className="App">
      <header className="App-header">
      <SubmitPoints wager={wager} handleWager={handleWager} user={username}/>
      <br></br>
      <Info wager={wager} roundScore={roundScore} multArray={multArray} handleChangeMult={handleChangeMult} multi={mult}/>
      <SetField/>
      </header>
    </div>
  );
}

export default App;
