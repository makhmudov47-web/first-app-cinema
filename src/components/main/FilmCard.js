import {React, useState ,useEffect} from 'react';
import "../../styles/mainStyles/FilmCard.css"
import {Link} from 'react-router-dom';
import Movie1 from "../../assets/images/movie1.jpg"
import Icons from "../../assets/icons/Icons";
import Movie2 from "../../assets/images/MortalKombat2.jpg"
import Movie3 from "../../assets/images/movie3.png"

function FilmCard({id, header, poster}) {

    const [isFavourite, setIsFavourite] = useState(false )

    const posters = {
        movie1: Movie1, movie2: Movie2, movie3: Movie3
    }
    useEffect(() =>{

    let favourite = localStorage.getItem("favourites")
    favourite = favourite.split(',')

    const element = favourite.find((item) => item === `${id}`)
    if (element) {
        setIsFavourite(true)
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

    return (<div className='FilmCard'>
        <Link to={'/film'}>
            <img src={posters[poster]} alt='poster'/>
            <p>{header}</p>
        </Link>
        <div className={isFavourite ? "FilmCard__favourite active" : "FilmCard__favourite"} onClick={AddInFavourite}><Icons name={'star'}/></div>


    </div>)
}


export default FilmCard;