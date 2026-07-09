import React from 'react';
import "../../styles/HeaderStyles/userContainer.css"
import Avatar from "../../assets/logo/logo.png"
// import {connect} from "react-redux";
// import setModalBoxAction from "../../redux/actions/actionModalBox";


import {useDispatch, useSelector} from "react-redux";
import {setModalBox} from "../../store/modalBoxSlice";
import {setIsAuth} from "../../store/authSlice";

const UserContainer = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const login = useSelector((state) => state.auth.user.login);
    const dispatch = useDispatch()
    return (
        <div className='userContainer'>
            {isAuth ?
                <>
                    <img src={Avatar} alt='logo'/>
                    <p>{login}</p>
                    <ul>
                        <li>профиль</li>
                        <li onClick={() => {
                            localStorage.removeItem('token');
                            dispatch(setIsAuth(false))

                        }}>выход</li>
                    </ul>
                </>
                :
                <>
                    <img src={Avatar} alt='logo'/>
                    <p>кинотеатр</p>
                    <ul>
                        <li onClick={() => dispatch(setModalBox('sign in'))}>Войти</li>
                        <li onClick={() => dispatch(setModalBox('Registration'))}>Регистрация</li>
                    </ul>
                </>
            }
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

export default UserContainer;
