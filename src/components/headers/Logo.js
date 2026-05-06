import React from 'react';
import '../../styles/HeaderStyles/logo.css'
import LogoImg from "../../assets/logo/logo.png"

class  Logo extends React.Component{
  render() {
    return(
      <div className='logo'>
        <img src={LogoImg} alt='logo'/>
       <p>кинотеатр</p>
      </div>
    )
  }
}

export default Logo;