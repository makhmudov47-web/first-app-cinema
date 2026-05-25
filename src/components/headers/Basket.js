import React from "react";
import "../../styles/HeaderStyles/Basket.css"
import Icons from "../../assets/icons/Icons";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
function Basket ()  {
    const basket = useSelector((state) => state.basket.value);
    return (
        <Link to='/basket'>
            <div className="Basket">
                <Icons name='basket'/>
                <div className="Basket_count">
                    <p>{basket.length}</p>
                </div>
            </div>

        </Link>
    )
}
export default Basket;