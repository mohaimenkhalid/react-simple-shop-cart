import React from "react";

const NavBar = ({ setKeyword }) => {
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    return (<div className="nav-bar">
        <span>My Shop</span>
        <input type="text" placeholder="search" onChange={handleChange} />
    </div>);
};

export  default NavBar;