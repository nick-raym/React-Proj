import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"

export default function CreateAccount(){
    //post
    const [newUser,setNewUser]=useState("")
    const [canCreate,setCanCreate]=useState(false)
    const [userDB,setUserDB]=useState([])
    const [username,setUsername]=useOutletContext()
    console.log(username)

    function onCreateAcc(event){
        event.preventDefault()
        setNewUser(event.target.create.value)
        setUsername(event.target.create.value)
        const isUser=userDB.find((user)=>user.username.toLowerCase()===newUser.toLowerCase())

        if(event.target.create.value!==""&&event.target.create.value!==" "&&!isUser){
        setCanCreate(true)
        const configObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"username": newUser,"points":50})
           }
          
           fetch('http://localhost:3000/users', configObj)
            .then(res => res.json())
            .then(data => setUserDB([...userDB,data]))
    }
    
    }

    function onChange(event){
        setNewUser(event.target.value)
    }

    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then((response)=>response.json())
        .then((users)=>{
            setUserDB(users)
        })
    },[])
    
    return(
        <div style={{marginTop:"100px"}}>
        <form onSubmit={(event)=>onCreateAcc(event)} style={{fontFamily: "'Common Pixel', sans-serif",color:"lightblue",marginLeft:"560px"}}>
            <input type="text" name="create" onChange={onChange} value={newUser} style={{height:"20px"}}></input>
            <input type="submit" value={"Create Account"} style={{backgroundColor: "#f44336",height:"28px",width:"170px",fontFamily: "'Common Pixel', sans-serif"}}></input>
        </form>
        <h4 style={{textAlign:"center"}}>{canCreate?"Account Created Username: "+newUser:"Invalid Account Name"}</h4>
        </div>
    )
}