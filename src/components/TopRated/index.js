import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCards from "../MovieCard";
import { LanguageContext } from '../../context';

const TopRated = () => {
    const [pag,setPag] = useState(1)
    const{language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const [topRated,setTopRated] = useState([])
   const  getTopRated = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${pag}`)
            .then((res) => setTopRated(res.data.results))
   }
   useEffect(() =>{
       getTopRated(API_KEY)
   },[pag, language])
    return (
        <div id='topRated' style={{background: dark ? "black" : "white"}}>
            <div className="container">
                <div className="topRated">
                    {
                        topRated.slice(0,3).map(el => <MovieCards key={el.id} el={el}/>   )

                    }
                <button style={{
                    color:'white',
                    padding: '10px 25px',
                    borderRadius: '5px',
                    background: 'blue'
                }}   onClick={()=>{
                    setPag(pag === 1 ? pag : pag -1)
                }}>last</button>
                <h2 style={{color: dark ? "white" : "black"}}>{pag}</h2>
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
        </div>
    );
};

export default TopRated;