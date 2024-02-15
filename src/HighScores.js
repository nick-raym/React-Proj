import { useState,useEffect } from "react"
export default function HighScores(){
    const [scores,setScores]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then((response)=>response.json())
        .then((users)=>{
            setScores(users.sort((a,b)=>b.points-a.points))
        })
    },[])
    return(
        <div id="highscores">
        {scores.map((user)=><p key={user.username}>USERNAME: {user.username}--POINTS: {user.points}</p>)}
        </div>
    )
}