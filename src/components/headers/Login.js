import React from "react";
// import setModalBoxAction from "../../redux/actions/actionModalBox";
// import {connect} from "react-redux";
import {useDispatch} from "react-redux";
import {setModalBox} from "../../store/modalBoxSlice";
import {setIsAuth , setLogin} from "../../store/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    function signIn(){
        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;
        dispatch(setIsAuth(true));
        dispatch(setLogin(login));
        dispatch(setModalBox(''));
    }

    return (
        <>
            <h2>Вход</h2>
            <input id="login" type={"text"} placeholder={'Введите логин '}/>
            <input id="password" type={"password"} placeholder={'Введите пароль'}/>

            <button onClick={signIn}>Войти</button>

        </>
    )
}

/*function mapDispatchToProps(dispatch) {
    return {
        setModalBox: modalBox => {
            dispatch(setModalBoxAction(modalBox))
        }
    }
}
export default connect(null , mapDispatchToProps)(Login);*/
export default Login