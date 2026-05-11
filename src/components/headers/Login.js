import React from "react";
// import setModalBoxAction from "../../redux/actions/actionModalBox";
// import {connect} from "react-redux";

const Login = ({setModalBox}) => {
    function signIn(){
        setModalBox('');
    }

    return (
        <>
            <h2>Вход</h2>
            <input type={"text"} placeholder={'Введите логин '}/>
            <input type={"password"} placeholder={'Введите пароль'}/>

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