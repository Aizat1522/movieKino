import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div id='movieCard'>
            <div className="movieCard">
               <Link to={`/movie/details/${el.id}`}> <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/></Link>
                <h2>{el.title}</h2>
                <h5>{el.releasek_date}</h5>
            </div>
        </div>
    );
};

export default MovieCard;