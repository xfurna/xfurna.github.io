import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className="nav-container">
            <div className="navbar">
                <NavLink className="page xf-page" to="/">xf</NavLink>
                <NavLink className="page" to="/xfurna.github.io/projects">schism</NavLink>
                <NavLink className="page" to="/xfurna.github.io/e1ixir">e1ixir</NavLink>
                <NavLink className="page" to="/xfurna.github.io/about">about</NavLink>
            </div>
        </div>
    );
}

export default Nav;
