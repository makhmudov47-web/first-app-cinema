 import React from "react";
import  { useState ,useEffect} from 'react';
import "../styles/mainStyles/FilmCard.css"
import {Link} from 'react-router-dom';
import Icons from "../assets/icons/Icons";
    import Movie1 from "../assets/images/movie1.jpg"
    import Movie2 from "../assets/images/MortalKombat2.jpg"
    import Movie3 from "../assets/images/movie3.png"
    import {useSelector , useDispatch} from "react-redux";
    import {addFilmInBasket, deleteFilmInBasket} from "../store/basketSlice";
    import {authSlice, setUser} from "../store/authSlice";
 import login from "../components/headers/Login";

const FilmCard = ({id, header, poster}) => {
    const basket = useSelector((state) => state.basket.value);
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);
    const [isFavourite, setIsFavourite] = useState(false )
    const [isBasket, setIsBasket] = useState(false)

    const posters = {
        movie1: Movie1, movie2: Movie2, movie3: Movie3
    }
    useEffect(() =>{

    let favourite = localStorage.getItem("favourites")
        if (favourite) {
            favourite = favourite.split(',')
            const element = favourite.find((item) => item === `${id}`)
            if (element) {
                setIsFavourite(true)
            }
        }
    if (basket) {
        const basketElement = basket.find((item) => item === id)
        if (basketElement) {
            setIsBasket(true)
        } else {
            setIsBasket(false)
        }
    }

    },[])


    function AddInFavourite() {
        let favourites = localStorage.getItem('favourites');
        if (!favourites) {
            favourites = ''
        }
        favourites = favourites.split(',')
        let list = []
        if (isFavourite) {
            list = favourites.map((item) => {
                if (item === `${id}`) {
                    item = ''
                }
                return item
            })
            list = list.filter((item) => item !== '')
            localStorage.setItem('favourites', list.join())
        } else{
            favourites.push(id)
            localStorage.setItem('favourites', favourites.join())
        }

        setIsFavourite(!isFavourite)

    }

    function AddInBasket() {
        if (!isBasket) {
            const element = basket.find((item) => item === id)
            if (!element) {
                dispatch(addFilmInBasket(id))
            }

        } else {
            const element = basket.find((item) => item === id)
            if (element) {
                dispatch(deleteFilmInBasket(id))
            }

        }
        setIsBasket(prevState => !prevState)

    }

    return (<div className='FilmCard'>
        <Link to={`/film/${id}`}>
            <img src={posters[poster]} alt='poster'/>
            <p>{header}</p>
        </Link>
        <div className={isFavourite ? "FilmCard__favourite active" : "FilmCard__favourite"} onClick={AddInFavourite}><Icons name={'star'}/></div>
        { isAuth ?
        <div className={isBasket ? "FilmCard__basket active" : "FilmCard__basket"} onClick={AddInBasket}><Icons name={'basket'}/></div>
        : null}


    </div>)
}


export default FilmCard;