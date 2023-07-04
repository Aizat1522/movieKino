import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { LanguageContext } from '../../context';

const MovieCard = ({el}) => {
    const {dark} = useContext(LanguageContext)
    return (
        <div id='movieCard'>
            <div className="movieCard" style={{color:dark ? "white" : "black", border: dark ? "2px solid white" : "2px solid black"}}>
               <Link to={`/movie/details/${el.id}`}> <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/></Link>
                <h2>{el.title}</h2>
                <h5>{el.releasek_date}</h5>
            </div>
        </div>
    );
};

export default MovieCard;