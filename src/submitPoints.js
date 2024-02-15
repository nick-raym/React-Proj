import { useEffect, useState } from "react"


export default function SubmitPoints({wager,handleWager,user}){
    //console.log(user)
    const [users,setUsers] = useState([])
    const [userInfo,setUserInfo]= useState({})
    
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then((response)=>response.json())
        .then((users)=>{
            console.log(users)
            setUsers(users)
            for (let i = 0; i < users.length; i++) {
                if(users[i].username.toLowerCase()==user.toLowerCase()){
                    setUserInfo({"username":users[i].username,"points":users[i].points})
                    console.log()
                }
                //users[i].username==user?setUserInfo({"username":users[i].username,"points":users[i].points}):null
                
            }
            //setUserInfo(users.find((userDB,i)=>userDB.username.toLowerCase())===user.toLowerCase()?{"username":user,"points":users[i].points}:null)
            
        })
    },[user])
    
    console.log(userInfo)
    //const thisUser=users.filter((userI)=>userI.username.toLowerCase()==user.toLowerCase())
    //setUserInfo(thisUser)
    
    
    
    return(
        <div>
        <form className={"wager-amount"} onSubmit={handleWager} value={wager}>
        
            <input type="text" name="wager" placeholder="Wager Amount"></input>
            
            <input type="submit" value={'Bet '+ wager +' Points'}/>
        </form>
        <h6 className="user">UserName: {user?user:"LOG IN"}</h6>
        <h6 className="points">Points: {userInfo.points?userInfo.points:"LOG IN"}</h6>
        </div>
    )
}