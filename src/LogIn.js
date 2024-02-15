import { useEffect, useState } from "react"
import { NavLink, useNavigate, useOutletContext } from "react-router-dom"


export default function LogIn(){
    const [username, setUsername] = useOutletContext()
    const [isUser,setIsUser]=useState(false)
    const [userDB,setUserDB]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then((response)=>response.json())
        .then((users)=>{
            setUserDB(users)
        })
    },[])
    useEffect(()=>{
        const verifyUser=userDB.find((user)=>user.username.toLowerCase()===username.toLowerCase())
        verifyUser?setIsUser(true):setIsUser(false)
    },[username])
    function onLogIn(event){
        event.preventDefault()
        setUsername(event.target.username.value)
    }
    // function onCreateAccount(event){
    //     event.preventDefault()
    //     useNavigate("/create-account")
    // }
    
    return(
        <div>
        <form onSubmit={(event)=>onLogIn(event)} style={{fontFamily: "'Common Pixel', sans-serif",color:"lightblue",marginLeft:"500px"}}>
            <label >Enter Username: </label>
            <input name="username" type="text" style={{backgroundColor: "lightblue"}}></input>
            <input type="submit" value="Log in" style={{backgroundColor: "#f44336",height:"23px",width:"100px",fontFamily: "'Common Pixel', sans-serif"}}/>
        </form>
        <h3 style={{fontFamily: "'Common Pixel', sans-serif",marginLeft:"0px",color:"white",textAlign:"center"}}>{isUser?"Welcome, "+username:"Not Logged In"}</h3>
        <NavLink to="create-account" style={{fontFamily: "'Common Pixel', sans-serif",display:"block",color:"#8638E0",marginLeft:"620px",marginTop:"40px",width:"250px",height:"40px",textAlign:"center"}}>Create New Account</NavLink>
        </div>
    )
}