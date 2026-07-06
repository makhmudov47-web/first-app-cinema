import React from 'react';
import {Link} from 'react-router-dom';
import Icons from "../../assets/icons/Icons";
import Movie1 from "../../assets/images/movie1.jpg"
import Movie2 from "../../assets/images/MortalKombat2.jpg";
import Movie3 from "../../assets/images/movie3.png"
import {useDispatch} from "react-redux";
import {deleteFilmInBasket} from "../../store/basketSlice";
import '../../styles/mainStyles/BasketFilmCard.css'

const BasketFilmCard = ({id, header, poster}) => {
    const dispatch = useDispatch();
    const posters = {
        movie1: Movie1, movie2: Movie2, movie3: Movie3
    }
    return (<div className='BasketFilmCard'>
        <Link to={`/film/${id}`}>
            <img src={posters[poster]} alt='poster'/>
        </Link>
            <p>{header}</p>
        {<button className="BasketFilmCard_removeFromBasket" onClick={() =>dispatch(deleteFilmInBasket(id))
        }><Icons
            name={'remover'}/></button>}


    </div>)
}


export default BasketFilmCard;