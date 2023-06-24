import React from 'react';

const MovieCards = ({el}) => {
    return (
        <div id='movieCards'>
            <div className="moviecards">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
                <h2>{el.title}</h2>
                <h4>{el.popularity}</h4>
            </div>
        </div>
    );
};

export default MovieCards;