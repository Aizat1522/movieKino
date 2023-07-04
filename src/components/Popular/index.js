import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../MovieCard";
import { LanguageContext } from '../../context';

const Popular = () => {
    const [popular, setPopular] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const [pag, setPag] = useState(1)
    const getPopular = (key)=>{
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${pag}`)
            .then((res)=>setPopular(res.data.results))
    }
    useEffect(()=>{
        getPopular(API_KEY)
    }, [pag, language])
    return (
        <section id="popular" style={{
            background: dark ?"black": "none"
        }}>
            <div className="container">
                <div className="popular">
                    {
                        popular.slice(0,4).map(el => <MovieCard key={el.id} el={el}/>)
                    }
                    <button style={{
                        color:'white',
                        padding: '10px 25px',
                        borderRadius: '5px',
                        background: 'blue'
                    }}   onClick={()=>{
                        setPag(pag === 1 ? pag : pag -1)
                    }}>last</button>
                    <h2 style={{color: dark ? "white": "black"}}>{pag}</h2>
                    <button style={{
                        color:'white',
                        padding: '10px 25px',
                        borderRadius: '5px',
                        background: 'blue'
                    }}   onClick={()=>{
                        setPag(pag +1)
                    }}>next</button>
                </div>
            </div>
        </section>
    );
};

export default Popular;