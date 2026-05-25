import React from 'react';
import "../pages/Pages.css"
import FilmCard from './FilmCard';
import Search from "../components/Search";


const MainPage = ({films,setFilms, fullFilms}) => {

     return (<div className='Page'>
         <Search fullFilms={fullFilms} setFilms={setFilms}/>
        <div className='FilmList'>
            {films.map((item) => <FilmCard
                key={item.id}
                id={item.id}
                header={item.header}
                Title={item.title}
                poster={item.poster}
            />)}


        </div>


    </div>)
}


export default MainPage;