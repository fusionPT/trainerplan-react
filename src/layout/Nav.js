import React from 'react';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

const navs = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
];

const Nav = () => (
    <div className= "bg-white p-4 shadow">
        <nav>
          <ul className="flex space-x-6 justify-end">

            {navs.map((navItem) => (
              <li>
                <NavLink 
                    exact to={navItem.path}
                    activeClassName="border-b-2 border-purple-400 pb-2">
                    {navItem.name}
                    </NavLink>
            </li>
            ))}
            
          </ul>
        </nav>
    </div>
)

export default Nav;
