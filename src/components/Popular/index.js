import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../MovieCard";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [pag, setPag] = useState(1)
    const getPopular = (key)=>{
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pag}`)
            .then((res)=>setPopular(res.data.results))
    }
    useEffect(()=>{
        getPopular(API_KEY)
    }, [pag])
    console.log(popular)
    return (
        <section id="popular">
            <div className="container">
                <div className="popular">
                    {
                        popular.slice(0,3).map(el => <MovieCard el={el}></MovieCard>)
                    }
                    <button style={{
                        color:'white',
                        padding: '10px 25px',
                        borderRadius: '5px',
                        background: 'blue'
                    }}   onClick={()=>{
                        setPag(pag === 1 ? pag : pag -1)
                    }}>last</button>
                    <h2>{pag}</h2>
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