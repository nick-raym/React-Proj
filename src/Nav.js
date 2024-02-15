import { NavLink } from "react-router-dom";
export default function Nav() {

    return (
        <>
        <nav className="nav-bar">
            <li><NavLink to="/">
                Log In
            </NavLink></li>
            <li><NavLink to="/plinko">
                Plinko
            </NavLink></li>
            <li><NavLink to="/highscores">
                HighScores
            </NavLink></li>
            <li><NavLink to="/rules">
                How To Play
            </NavLink></li>
        </nav>
        </>
    )
}