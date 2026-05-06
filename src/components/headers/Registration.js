import React from "react";

const Registration = ({setModalBox}) => {
    function signUp() {
        setModalBox('');
    }
    return (
        <>
            <h2>Регистрация</h2>
            <input type={"text"} placeholder={'Введите логин '}/>
            <input type={"password"} placeholder={'Введите пароль'}/>
            <input type={"email"} placeholder={'Введите почту'}/>
            <button onClick={signUp}>Сохранить</button>
        </>
    )
}

export default Registration;