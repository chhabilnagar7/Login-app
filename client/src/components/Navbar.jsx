import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
  return (
    <div className="navbar">
      <span className="logo"><Link to="/">Login-App</Link>
      </span>{
        user ? (

      <ul className="list">
        
        <li className="listItem">Chhabil</li>
        <li className="listItem">Logout</li>
      </ul>

        ) : (<Link className="link" to="login">Login</Link>)
      }


    </div>
  );
};

export default Navbar;
