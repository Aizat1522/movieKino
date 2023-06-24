import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCards from "../MovieCard";

const TopRated = () => {
    const [pag,setPag] = useState(1)
    const [topRated,setTopRated] = useState([])
   const  getTopRated = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${pag}`)
            .then((res) => setTopRated(res.data.results))
   }
   useEffect(() =>{
       getTopRated(API_KEY)
   },[pag])
    console.log(topRated)
    return (
        <div id='topRated'>
            <div className="container">
                <div className="topRated">
                    {
                        topRated.slice(0,3).map(el => <MovieCards el={el}></MovieCards>   )

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
        </div>
    );
};

export default TopRated;