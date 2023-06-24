import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import actorDetails from "../../Page/ActorDetails";
import {Link} from "react-router-dom";

const MovieActor = ({id}) => {
    const [movieActor, setMovieActor] = useState([])
    const getMovieActor = (key) => {
        axios(` https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
            .then(res => setMovieActor(res.data.cast))
    }
    useEffect(() => {
        getMovieActor(API_KEY)
    }, [])
    console.log("mov", actorDetails)
    return (
        <div id='movieActor'>
            <div className="movieActor">
                {
                    movieActor.map(el => (
                        <div className='movieActor--card'>
                            <Link to={`/movie/details/${el.id}`}>
                                {  el.poster_path ?
                                   <img width={200} src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
                                   : <img width={200} height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwS0Q6g14Xd5POMRvS1WYTqA8EhtJUrT9r_w&usqp=CAU" alt=""/>
                                }
                               </Link>

                            <h4>{el.title}</h4>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default MovieActor;

// https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US
