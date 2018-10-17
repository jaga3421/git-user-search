import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ()=> {
    return (
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sample">Sample</NavLink>
        </nav>
    );
}

export default Nav;