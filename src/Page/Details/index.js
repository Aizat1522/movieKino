import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import {BsFillBookmarkFill, BsListStars} from "react-icons/bs";
import Actors from "../../components/Actors";
import Triler from "../../components/Triler";
import {FaMinus} from "react-icons/fa";
import { LanguageContext } from '../../context';

const Details = () => {
    const [model, setModel] = useState(false)

    const [color, setColor] = useState(false)
    const [color2, setColor2] = useState(false)
    const [color3, setColor3] = useState(false)
    const [color4, setColor4] = useState(false)
    const {movieId} = useParams()
    console.log(movieId)
    const [details, setDetails] = useState({})
    const{language} =useContext(LanguageContext)
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`)
            .then(res => setDetails(res.data))
    }
    useEffect(() => {
        getDetails(API_KEY)
    }, [language])
    console.log(details)
    const {title, poster_path, release_date, tagline, overview, genres, runtime, vote_average} = details

    return (
        <>
            <section style={{objectFit: 'cover', background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces//${poster_path}") no-repeat center/cover`}} id='details'>
                <div className="bloc"></div>
                <div className="container">
                    <div className="details">
                        <div className="details--img">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt=""
                                 onClick={()=> setModel(true)}/>
                            <div className="details--img__model" style={{
                                display: model ? "block" : "none",
                                zIndex: model ? '20' : ''
                            }}>
                                <h4 onClick={() => setModel(false)}><FaMinus/></h4>
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt=""/>

                            </div>
                            <div className="details--img__blur" style={{
                                background: model ? 'black': '',
                                zIndex: model ? '10' : ''
                            }}></div>
                        </div>
                        <div className='details--one'>
                            <h1>{title}(2023)</h1>
                            <div className="details--one__group">
                                <p>{release_date}</p>
                                <div>{genres?.map(el => <p>{el.name}</p>)}</div>
                                <h4>{Math.floor(runtime / 60)} h {Math.floor(runtime % 60)}m </h4>
                            </div>
                            <div className="details--one__krug">
                                <div className="details--one__krug--text2" style={{
                                    background:`conic-gradient(green ${Math.round(vote_average * 10) * 3.59}deg, #253625 0deg)`
                                }}>
                                    <h3 style={{
                                    }}>{Math.round(vote_average * 10)}%</h3>
                                </div>
                                    <h2>Рейтинг</h2>
                                <div className='details--one__krug--icon'>
                                    <div style={ { color: color }} className='icon'><BsListStars onClick={() => {setColor(color === false ? 'pink' : false)}}/></div>
                                    <div style={{
                                        color: color2
                                    }} className='icon'><AiFillHeart onClick={() => {
                                        setColor2(color2 === false ? 'red' : false)
                                    }}/></div>
                                    <div style={{
                                        color: color3
                                    }} className='icon'><BsFillBookmarkFill onClick={() => {
                                        setColor3(color3 === false ? 'green' : false)
                                    }}/></div>
                                    <div style={{
                                        color: color4
                                    }} className='icon'><AiFillStar onClick={() => {
                                        setColor4(color4 === false ? 'yellow' : false)
                                    }}/></div>
                                </div>
                                </div>
                                <i><h1>"{tagline}"</h1></i>
                                <h2>Обзор</h2>
                                <p>{overview}</p>
                            </div>

                </div>
                    </div>
                {/*</div>*/}
            </section>
            <Actors id={movieId}/>
            <Triler id={movieId}/>
        </>
    );
};

export default Details;