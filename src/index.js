import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import LogIn from './LogIn';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import HighScores from './HighScores';
import Rules from './rules';
import CreateAccount from './CreateAccount';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    // Render <Root> at [URL].
    path: "/",
    element: <Root />,
    // Render <Error> when errors occur.
    //errorElement: <Error />,
    // Render these children in the root's outlet when...
    children: [
      {
        path: "/",
        element: <LogIn />
      },
      {
        path: "/plinko",
        element: <App/>
      },
      {
        path: "highscores",
       element: <HighScores />
      },
      {
        path: "rules",
       element: <Rules />
      },
      {
        path:"create-account",
        element:<CreateAccount/>
      }
     ]
    }
  ])


  const root = ReactDOM.createRoot(document.getElementById('root'));




  root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
