import React from 'react';
import "../../styles/HeaderStyles/userContainer.css"
import Avatar from "../../assets/logo/logo.png"
// import {connect} from "react-redux";
// import setModalBoxAction from "../../redux/actions/actionModalBox";
import modalBox from "../ModalBox";

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
/*function mapDispatchToProps(dispatch) {
    return {
        setModalBox: modalBox => {
            dispatch(setModalBoxAction(modalBox));
        }
    }
}
export default connect(null,mapDispatchToProps) (UserContainer);*/

export default userContainer;
