import React from 'react';
import "../pages/Pages.css"
import { useParams } from "react-router-dom";
import Movie1 from "../../src/assets/images/movie1.jpg"
import Movie2 from "../../src/assets/images/MortalKombat2.jpg"
import Movie3 from "../../src/assets/images/movie3.png"




const FilmPage = ({ fullFilms }) => {

    const posters = {
        movie1: Movie1,
        movie2: Movie2,
        movie3: Movie3
    }
    const parms = useParams();
    const film = fullFilms.find((item) => parms.id === item.id.toString());


    return (
       <div className='Page'>
           <img src={posters[film.poster]} alt={film.title}/>
           <h2>{film.header}</h2>



       </div>
    )
}

export default FilmPage