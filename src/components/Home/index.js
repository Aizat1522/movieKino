import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import MovieCard from "../MovieCard";


const Home = () => {
    const {movieId} = useParams()
    const [home, setHome] = useState([])
    const getHome = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then(res => setHome(res.data.result))
    }
    useEffect(() => {
        getHome(API_KEY)
    }, [])
    return (
        <section id="home">
            <div className="container">
                <div className="home">
                    <div className="home--one">
                    <h1>Добро пожаловать.</h1>
                    <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
                    <input type="text" placeholder='Найти фильм, сериал, персону.....'/>
                    <button>Search</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

// }}
// {/*{*/
// //
// //
// }
// {/*    home.map(el => <MovieCards key={el.id} el={el}/>)*/
// }
// {/*}*/
// }