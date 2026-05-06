import React from 'react';
import { Link  } from 'react-router-dom';
import "../../styles/HeaderStyles/menu.css"
import NavItems from './NavItems';

class  Menu extends React.Component{
  render() {
    return(
      <div className='menu'>
        <Link to={'/'}><NavItems main="Главная"/></Link>
        <Link to={'/favourite'}><NavItems info="Избранное"/></Link>
        <Link><NavItems about="О Контакты"/></Link>
        <Link><NavItems about="О сайте"/></Link>

        
        
        
       
      </div>
    )
  }
}

export default Menu;