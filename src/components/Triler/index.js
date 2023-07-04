import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import { LanguageContext } from '../../context';

const Triler = ({id}) => {
    const [triler, setTriler] = useState([])
    const {dark} = useContext(LanguageContext)

    const getTraler = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then(res => setTriler(res.data.results))
    }
    useEffect(() => {
        getTraler(API_KEY)
    }, [])
    console.log(triler)
    return (
        <div id='triler' style={{background: dark ?"black":"white"}}>
            <div className="container">
                <h1 style={{color:dark ? "white": "black"}} className='title'>~Трейлер~</h1>
                <div className="triler">
                    {
                        triler.slice(0, 1).map(el => (
                            <iframe width="900" height="450" src={`https://www.youtube.com/embed/${el.key}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Triler;