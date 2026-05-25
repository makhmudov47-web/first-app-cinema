import React from "react";
import '../styles/mainStyles/BasketPage.css'
import './Pages.css'
import {useDispatch, useSelector} from "react-redux";
import BasketFilmCard from "../components/main/BasketFilmCard";


const BasketPage = ({films}) => {
    const basket = useSelector(state => state.basket.value);
    const dispatch = useDispatch();
    const basketList = films.filter((item) => basket.includes(item.id));
    return (<div className="Page BasketPage">

        <h2>корзина</h2>
        <div className='basket_flexbox'>

            {basketList.map((item) => <BasketFilmCard key={item.id} id={item.id} header={item.header}
                                                      poster={item.poster}/>)}
        </div>


    </div>)
}

export default BasketPage;