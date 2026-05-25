import React from 'react';
import "../../styles/HeaderStyles/header.css"
import Logo from './Logo';
import Menu from './Menu';
import UserContainer from './UserContainer';
import Basket from "./Basket";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const  Header = () => {

    const isAuth = useSelector((state) => state.auth.isAuth)

    return(
      <div className='header'>
        <Logo/>
        <Menu/>
          {
              isAuth ? <Basket/> : null
          }

        <UserContainer/>
      </div>
    )

}

export default Header;

