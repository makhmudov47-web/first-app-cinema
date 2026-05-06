import React, {useState} from 'react';
import './App.css';
import Header from './components/headers/Header';
import MainPage from './pages/MainPage';
import Footer from './components/footers/Footer';
import {Route, Routes} from 'react-router-dom';
import FilmPage from './pages/FilmPage'
import FavouritePage from './pages/FavouritePage';
import ModalBox from "./components/ModalBox";

import Registration from "./components/headers/Registration";
import Login from "./components/headers/Login";

class Film {
    films

    constructor(id, header, poster) {
        this.id = id;
        this.header = header;
        this.poster = poster;
    }
}


const App = () => {
    const [modalBox, setModalBox] = useState('');
    const films = [new Film(1, "Blade runner 2049", "movie1"), new Film(2, "мортал комбат2", "movie2"), new Film(3, "Film By Designer", "movie3"),]
    const modalBoxes = {
       'Login': <Login setModalBox={setModalBox} />,
       "Registration": <Registration setModalBox={setModalBox}    />,
    }
    return (<div className='app'>
        <Header setModalBox={setModalBox}/>
        <Routes>
            <Route path='/' element={<MainPage films={films}/>}/>
            <Route path='favourite' element={<FavouritePage films={films}/>}/>
            <Route path='/film' element={<FilmPage/>}/>
        </Routes>
        <Footer/>
        {
            modalBox !== '' ?
                <ModalBox setModalBox={setModalBox}>{ modalBoxes[modalBox] }</ModalBox>
                : null
        }

    </div>)
}


export default App;
