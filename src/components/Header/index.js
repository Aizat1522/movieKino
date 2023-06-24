import React from 'react';
import {NavLink} from "react-router-dom";
import {BsFillSearchHeartFill} from "react-icons/bs";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="img"/>
                    <div className="header--nav">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/popular'}>Popular</NavLink>
                        <NavLink to={'topRated'}>Top Rated</NavLink>
                    </div>
                    <div className="header--search">
                        <input type="text" placeholder='search'/>
                        <button>search</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;