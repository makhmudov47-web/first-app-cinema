import React from "react";

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

export default Login