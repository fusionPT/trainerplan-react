import React from 'react';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

const Nav = () => (
    <div className= "bg-white p-4 shadow">
        <nav>
          <ul className="flex space-x-6 justify-end">
            <li>
              <NavLink exact to="/" activeClassName="border-b-2 border-purple-400 pb-2">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName="border-b-2 border-purple-400 pb-2">About</NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="border-b-2 border-purple-400 pb-2">Contact</NavLink>
            </li>
          </ul>
        </nav>
    </div>
)

export default Nav;
