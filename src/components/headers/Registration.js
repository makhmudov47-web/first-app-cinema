import React from "react";
import icons from "../../assets/icons/Icons";
import Icons from "../../assets/icons/Icons";

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
            <Icons name='loadder'/>
        </>
    )
}

export default Registration;