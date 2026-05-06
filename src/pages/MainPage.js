import {React,useState} from 'react';
import "../pages/Pages.css"
import FilmCard from '../components/main/FilmCard';


const MainPage = ({films}) => {

     return (<div className='Page'>
        <div className='FilmList'>
            {films.map((item) => <FilmCard key={item.id} id={item.id} header={item.header}
                                           poster={item.poster}/>)}


        </div>


    </div>)
}


export default MainPage;