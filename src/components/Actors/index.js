import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import Slider from "react-slick";
import user from '../../image/user.png'
import {Link} from "react-router-dom";
import { LanguageContext } from '../../context';

const Actors = ({id}) => {
    const [actors, setActors] = useState([])
    const {dark} = useContext(LanguageContext)
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then(res => setActors(res.data.cast))
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [])
    console.log(actors)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
    };

    return (
        <section id='actors'style={{background: dark ? "black" : "white"}}>
            <div className="container">
                <h1 style={{color:dark ? "white": "black"}} className='title'>Главный роль</h1>
                <Slider className="actors" {...settings}>
                    {
                        actors.map(el => (
                            <div className='actors--card'>
                                <Link to={`/movie/details/actor/${el.id}`}>
                                    {
                                        el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt="img"/>
                                            : <img width={150} height={180} src={user} alt="img"/>
                                    }
                                </Link>
                                <h5 style={{color:dark ? "white": "black"}}>{el.name}</h5>
                            </div>
                        ))
                    }
                </Slider>

            </div>
        </section>
    );
};

export default Actors;