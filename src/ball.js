import { useState,useEffect } from "react";
import Peg from "./Peg";

export default function Ball(){
    const [x,setX]=useState(350) //half of game screen size
    const [y,sety]=useState(100)
    const radius=20
    const status= 0
    const color="black"
    const [vx,setvx]=useState(0)//1.1
    const [vy,setvy]=useState(0)//1.1
    //const[negvy,setNegVy]=useState(-1)
    const [pegInfo,setPegInfo]=useState([{id:1,x:350,y:200,color:"white"},{id:2,x:200,y:200,color:"white"},{id:3,x:500,y:200,color:"white"}])
    const [dropButton,setDropButton]=useState("Drop Ball")
    const [isBouncing,setIsBouncing]=useState(false)
    //collision y====(pegInfo[i].y-y<33 && pegInfo[i].y-y>=0) (y-pegInfo[i].y<33 && y-pegInfo[i].y>=0)
    //collision x====(pegInfo[i].x-x<33 && pegInfo[i].x-x>=0) (x-pegInfo[i].x<33 && x-pegInfo[i].x>=0)
    useEffect(()=>{
        for(let i=0;i<pegInfo.length;i++){
            if((pegInfo[i].y-y<33 && pegInfo[i].y-y>=0)&&(pegInfo[i].x-x<33 && pegInfo[i].x-x>=0)){
                //collision y
                //console.log("collision")
                //setIsBouncing(true)
                //subtract from the y value
                //console.log(pegInfo[i])
                //setPegInfo([...pegInfo,{...pegInfo[i].color="red"}])
                setvy(vy*-1)
                setIsBouncing(true)
            }
            else if(y<30){
                console.log("collision")
                setvy(vy*-1)
                //setvx(vx*-1)
                setIsBouncing(true)
            }
            else if(y>680){
                sety(680)
                setvx(0)
                setIsBouncing(false)
            }
            else{
                if(vy<5&&vy>0){setvy(vy*1.05)}
                else if(vy>3){setvy(vy-1)}
                else if(vy>-5&&vy<0){setvy(vy*1.05)}
                //else if(vy<-3){setvy(vy+1)}
                //setvy((prevVY)=>prevVY<4||(prevVY>-4&&prevVY<0)?prevVY*1.05:prevVY*-1)
                setIsBouncing(false)
                //setPegInfo([...pegInfo,{...pegInfo[i].color="white"}])
            }
            if((pegInfo[i].x-x<33 && pegInfo[i].x-x>=0)&&(pegInfo[i].y-y<33 && pegInfo[i].y-y>=0)){
                setvx(vx*-1)
                setIsBouncing(true)
            }
            else if(x<20||x>680){
                setvx(vx*-0.9)
                setIsBouncing(true)
            }
            else{
                if(vx<5&&vx>0){setvx(vx*1.05)}
                else if(vx>5){setvx(vx-1)}
                else if(vx<-3){setvx(vx+1)}
                else{setvx(vx*1.05)}
                //setvx((prevVX)=>prevVX<4||(prevVX>-4&&prevVX<0)?prevVX*1.05:prevVX*-1)
                setIsBouncing(false)
            }
        }
    },[x,y])

    useEffect(() => {
        //Implementing the setInterval method cause state can't update in a loop
        const timer = setInterval(() => {
            //sety((prevY) => (prevY < 680 ? prevY+vy : 680));
            //certain amount of time
    
                sety((prevY)=>prevY+vy)
                setX((prevX)=>prevX+vx)
        
            //sety((prevY) => (isBouncing? prevY-vy : prevY+vy));

            //console.log(isBouncing)
          }, 24);
      
          return () => {
            clearInterval(timer);
          };
        
    }, [vy,vx]);

    useEffect(() => {
        //Implementing the setInterval method cause state can't update in a loop
        
        sety((prevY) => (isBouncing? prevY+vy:prevY));
        setX((prevX)=> (isBouncing? prevX+vy:prevX));
        //console.log(y)
         
        
    }, [isBouncing]);

    function handleDrop(){
        //sety(y+10)
        //if ball is dropped button = reset
        setDropButton(dropButton==="Drop Ball"?"Reset":"Drop Ball")
        if(dropButton==="Reset" && y>670){
            setX(700/2);
            sety(100)
            setvy(0)
            setvx(0)
            setIsBouncing(false)
        }
        else{
            setDropButton("Reset")
            setvy(1.03)
            setvx(0)
        }
    }

    // useEffect(()=>{
        
    //     setvy(vy+10)

    // },[isBouncing]);

    //onClick of a drop div let user click on top row to drop
    //

    return(
        <>
        
        <div>
        <svg height="700" width="700" > 
            <circle cx={x} cy={y} r={radius} stroke="darkBlue" 
               strokeWidth="2" fill={color} /> 
            {pegInfo.map((info)=><Peg key={info.id} color={info.color} x={info.x} y={info.y}/>)}
         </svg>
         {<input type={"submit"} value={dropButton} onClick={handleDrop} style={{zIndex:0,backgroundColor: "#f44336",height:"50px",width:"100px",fontFamily: "'Common Pixel', sans-serif"}}/>}
         </div>
         </>
    )
}