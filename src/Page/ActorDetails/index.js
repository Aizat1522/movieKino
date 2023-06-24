import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import MovieActor from "../../components/MovieActors";
import MovieActors from "../../components/MovieActors";

const ActorDetails = () => {
    const {actorId} = useParams()

    const [further,setFurther] = useState(false)

    const [actorDetails, setActorDetails] = useState({})
    const getActorDetails = (key) =>{
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`)
            .then(res => setActorDetails(res.data))
    }
    useEffect(()=>{
        getActorDetails(API_KEY)
    },[])
    console.log('actor',actorDetails)
    const{profile_path, name, biography, also_known_as,birthday,place_of_birth} = actorDetails
    const handleFurther =() =>{
        setFurther(!further);
    }
    return (
        <div id='actor'>
            <div className="container">
                <div className="actor">
                    <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`} alt=""/>
                    <div className="actor--title">
                       <h1>{name}</h1>
                        <h5>Биография</h5>
                       <p>
                           {further ? biography : biography?.slice(0,395)}
                           {!further && biography?.length > 395 && (
                               <button onClick={handleFurther} className='actor--title__btn'>Далее</button>
                           )}
                       </p>
                        <div className="actor--title__biography">
                            <div className="actor--title__biography--price">
                                <h2>Также известность как</h2>
                                <div>{also_known_as?.map((el) => <li key={el}>{el}</li>)}</div>
                            </div>
                            <div className="actor--title__biography--price">
                                <h2>Дата рождения</h2>
                                <p>{birthday ? birthday : '---'}</p>
                            </div>
                            <div className="actor--title__biography--price">
                                <h2>Место рождения</h2>
                                <p>{place_of_birth}</p>
                            </div>
                        </div>

                   </div>
                </div>
                <MovieActors id={actorId}/>
            </div>
        </div>
    );
};

export default ActorDetails;