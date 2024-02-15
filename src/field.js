import { useState,useEffect } from "react";
import Ball from "./ball";
import Peg from "./Peg";
export default function SetField() {
    

	//ctx.strokeStyle = "#ffffff";
	//ctx.lineWidth =2;
    return(
        <div className="field" style={{width:"700px",height:"700px", strokeWidth:"2px",color:"#ffffff",backgroundColor:"lightblue"}}>
            <Ball  />
        </div>
    )
}