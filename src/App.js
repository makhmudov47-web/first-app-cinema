import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/headers/Header';
import MainPage from './pages/MainPage';
import Footer from './components/footers/Footer';
import {Route, Routes} from 'react-router-dom';
import FilmPage from './pages/FilmPage'
import FavouritePage from './pages/FavouritePage';
import ModalBox from "./components/ModalBox";
//import {connect} from "react-redux";
import Registration from "./components/headers/Registration";
import Login from "./components/headers/Login";

import {useDispatch, useSelector} from "react-redux";
import BasketPage from "./pages/BasketPage";
import {setIsAuth, setUser} from "./store/authSlice";

class Film {
    constructor(id, header, poster) {
        this.id = id;
        this.header = header;
        this.poster = poster;
    }
}


const App = () => {

    const [fullFilms, setFullFilms] = useState([]);

    const dispatch = useDispatch();

    const modalBox = useSelector((state) => state.modalBox.value)

    const [films, setFilms] = useState([new Film(1, "Blade runner 2049", "movie1"), new Film(2, "мортал комбат2", "movie2"), new Film(3, "Film By Designer", "movie3")])

    useEffect(() => {
        // fetch('http://www.omdbapi.com/?t=StarWars&apikey=dc758a5b')
        //  .then((response) => response.json())
        ///*это была ошибкой*/.then(response => response.json())
        //  .then((result) => {
        const mass = [...films]
        setFilms(mass)
        setFullFilms([...mass])
        const token = localStorage.getItem('token');
        if (token) {
            const api = 'http://localhost:9999/auth/check';
            fetch(api, {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token})
            })
                .then(result => result.json())
                .then((result) => {
                   // setLoading(false)
                    if (result && result.message) {
                        dispatch(setIsAuth(true))
                        dispatch(setUser({login: result.data.login}))

                    }
                })

        }
        //       })
    }, []);

    const modalBoxes = {
        'sign in': <Login/>, 'Registration': <Registration/>
    }
    return (<div className='app'>
        <Header/>
        <Routes>
            <Route path='/' element={<MainPage films={films} setFilms={setFilms} fullFilms={fullFilms}/>}/>
            <Route path='/film/:id' element={<FilmPage fullFilms={fullFilms}/>}/>
            <Route path='favourite' element={<FavouritePage films={films}/>}/>
            <Route path='/basket' element={<BasketPage films={films}/>}/>
        </Routes>
        <Footer/>
        {modalBox !== '' ? <ModalBox>{modalBoxes[modalBox]}</ModalBox> : null}

    </div>)
}

// function mapStateToProps(state) {
//     return {
//         modalBox: state.getModalBox.modalBox
//     }
// }
//
// export default connect(mapStateToProps)(App);
export default App;
