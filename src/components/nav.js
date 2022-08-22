import "./nav.css";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About">About us</Link>
        </li>
        <li>
          <Link to="/Work">Projects</Link>
        </li>
        <li>
          <Link to="/Action" className="TakeAction">
            Take Action
          </Link>
        </li>
        <li>
          <Link to="/Donation" className="Donate">
            Donate
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
