import React, { useContext, useState } from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import { LanguageContext } from '../../context';
import {BsFillSunFill} from 'react-icons/bs'


const Header = () => {
    const [search, setSearch] = useState("")
    const {language}= useContext(LanguageContext)
    const {setLanguage}= useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const nav = useNavigate()
    console.log(search);
    console.log("lan",language);
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
                         <select onChange={(e) => setLanguage(e.target.value)}>
                            <option value="en-US">English</option>
                            <option value="ru-RU">Русский</option>
                            <option value="fr-FR">France</option>
                         </select>
                         <div className="header--dark">
                            <button onClick={() => setDark(!dark)}>
                                 <BsFillSunFill style={{color: dark ? "black" : "white"}}/> </button>                        
                         </div>
                    <div className="header--search">
                        <input type= "text"
                        placeholder='search'
                         onChange={(e) =>{
                            setSearch(e.target.value);
                        }}

                        value={search}
                        />
                        {search.length ? (
                            <button
                             onClick={() => {nav(`/movie/search/${search}`);
                        setSearch('');
                        }}
                        >search</button>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;