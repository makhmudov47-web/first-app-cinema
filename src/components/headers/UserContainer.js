import React from 'react';
import "../../styles/HeaderStyles/userContainer.css"
import Avatar from "../../assets/logo/logo.png"

const  UserContainer=({setModalBox}) =>{

    return(
      <div className='userContainer'>
        <img src={Avatar} alt='logo'/>
        <p>кинотеатр</p>
        <ul>
          <li onClick={() => setModalBox('Login')}>Войти</li>
          <li onClick={() => setModalBox('Registration')}>Регистрация</li>
        </ul>
       
      </div>
    )

}

export default UserContainer;