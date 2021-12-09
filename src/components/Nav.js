import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <>
            <div className="menu">
                <div className="navbar">
                    <NavLink className="page xf-page" to="/">xf</NavLink>
                    <NavLink className="page" to="/projects">schism</NavLink>
                    <NavLink className="page" to="/e1ixir">e1ixir</NavLink>
                    <NavLink className="page" to="/about">about</NavLink>
                </div>
            </div>
            <div className="smenu">
                <div className="snavbar">
                    <NavLink className="spage sxf-page" to="/">xf</NavLink>
                    <NavLink className="spage" to="/projects">Schism</NavLink>
                    <NavLink className="spage" to="/e1ixir">E1ixir</NavLink>
                    <NavLink className="spage" to="/about">About</NavLink>
                </div>
            </div>
        </>
    );
}

export default Nav;
