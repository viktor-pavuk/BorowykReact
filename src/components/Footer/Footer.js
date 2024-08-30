import React from "react";
import {NavLink} from "react-router-dom";
import "./Footer.css"

const Header = () => {
    return (
        <div className="footer">
            <NavLink to="/">Garden</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/shop">Shop</NavLink>
        </div>
    );
};

export default Header;