import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className="App-item">
            <div className="navbar">
                <NavLink className="page xf-page" to="/">xf</NavLink>
                <NavLink className="page" to="/projects">schism</NavLink>
                <NavLink className="page" to="/e1ixir">e1ixir</NavLink>
                <NavLink className="page" to="/about">about</NavLink>
            </div>
        </div>
    );
}

export default Nav;
