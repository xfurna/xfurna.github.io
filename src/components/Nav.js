import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className="menu">
            <div className="navbar">
                <NavLink className="page" to="/">xf</NavLink>
                <NavLink className="page" to="/projects">Schism</NavLink>
                <NavLink className="page" to="/e1ixir">E1ixir</NavLink>
                <NavLink className="page" to="/about">About</NavLink>
            </div>
        </div>
    );
}

export default Nav;
