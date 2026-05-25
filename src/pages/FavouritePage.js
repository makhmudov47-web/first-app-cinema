import React, {useEffect} from 'react'
import '../styles/mainStyles/FavouritePage.css'
import FilmCard from "./FilmCard";
import {useSelector, useDispatch} from "react-redux";
import {setFavourites} from "../store/favouritesSlice";


const FavouritePage = ({films}) => {

    // const [isLoaded, setIsLoaded] = useState(false);
    const favourites = useSelector((state) => state.favourites.value);
    const dispatch = useDispatch();

    useEffect(() => {
        let favourite = localStorage.getItem('favourites');
        favourite = favourite.split(',');
        const mass = films.filter((item) => favourite.includes(item.id.toString()))

        dispatch(setFavourites(mass));
    }, []);


    return (<div className='Page'>
        <div className='FilmList'>

        {favourites.map((item) => <FilmCard key={item.id} id={item.id} header={item.header}
                                            poster={item.poster}/>)}


        {/*  {
        favourites.map(dispatch((item) => <FilmCard key={item.id} id={item.id} header={item.header} poster={item.poster}/>))
        } */}

    </div>
    </div>)
}

export default FavouritePage