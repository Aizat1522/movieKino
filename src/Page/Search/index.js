import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { LanguageContext } from "../../context";

const Search = () => {
  const [search, setSearch] = useState([]);
  const {language} = useContext(LanguageContext)
  const { movieName } = useParams();
  const getSearch = (key) => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=${language}&query=${movieName}`
    ).then((res) => setSearch(res.data.results));
  };
  useEffect(() => {
    getSearch(API_KEY);
  }, [search,language]);

  return (
    <div id="search">
      <div className="container">
        <div className="search">
          {search.map((el) => (
            <MovieCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
