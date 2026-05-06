import {React , useState,useEffect} from 'react'
import '../styles/mainStyles/FavouritePage.css'
import FilmCard from "../components/main/FilmCard";


const FavouritePage = ({films}) => {

    const [isLoaded, setIsLoaded] = useState(false);
    let favourites = []

    useEffect(() => {


    let favourite = localStorage.getItem('favourites');
    favourite = favourite.split(',');
    favourites =  films.filter((item) => favourite.includes(item.id));
        setIsLoaded( )
    },[])
    return (<div className='Page'>

        {
            favourites.map((item) => <FilmCard key={item.id} id={item.id} header={item.header} poster={item.poster}/>)
        }

    </div>)
}

export default FavouritePage