import React from 'react';
import "../../styles/HeaderStyles/header.css"
import Logo from './Logo';
import Menu from './Menu';
import UserContainer from './UserContainer';

const  Header = ({setModalBox}) => {

    return(
      <div className='header'>
        <Logo/>
        <Menu/>
        <UserContainer setModalBox={setModalBox}/>
      </div>
    )

}

export default Header;

