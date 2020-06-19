import React, {useContext} from "react";
import ThemeContext from "../ThemeContext";

const NavBar = ({ setKeyword }) => {
    const {dark, toggle} = useContext(ThemeContext);
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    return (
        <div className="nav-bar">
            <span>My Shop { dark ? 'dark' : 'light' }</span>
            <input type="text" placeholder="search" onChange={handleChange} />
            <button style={{fontSize:"20px",backgroundColor: `${ dark ? 'white' : 'black' }`, color: `${ dark ? 'black' : 'white' }`, border: "1px solid #FF0000", cursor:"pointer" , padding: ".5rem"}} onClick={toggle}>Change theme to {dark ? 'light' : 'dark'}</button>
        </div>

    );
};

export  default NavBar;