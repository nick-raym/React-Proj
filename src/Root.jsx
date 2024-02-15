import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import App from "./App";
import { useState } from "react";

// This component will render on load.
export default function Root() {
    const [username,setUsername]=useState("")
  return (
    // Note: `className` props throughout this app leverage Tailwind CSS, an optional dependency.
    <div className="doc">
      {/* A <nav> component that links out to /, /teas, and /about. */}
      <div id="nav-border">
      <Nav />
      </div>
      {/* Nested routes will render right here. */}
      <Outlet context={[username, setUsername]}/>
      {/* This <footer> will render below every route. */}
      <br/><br/>
      <hr style={{marginBottom:"20px",colorAdjust:"black",marginTop:"400px"}}/>
      <footer className="footer">PLINKO GAME React Proj</footer>
    </div>
  );
}
