import React from "react";
import Icons from "../../assets/icons/Icons";
// import setModalBoxAction from "../../redux/actions/actionModalBox";
// import {connect} from "react-redux";
import {setModalBox} from "../../store/modalBoxSlice";
import {useDispatch} from "react-redux";

const Registration = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);

     function signUp() {
        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;

        const data = {
            login: login,
            password: password,
            email: email
        }

        console.log("data", data);

        const api = 'http://localhost:9999/auth/registration';
        setLoading(true);
        fetch(api,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(result => result.json())
            .then((result) => {
                setLoading(false);
                if (result && result.message){
                    alert(result.message)
                    console.log(result.message);
                    dispatch(setModalBox(''));
                }
            })

    }


    return (
        <>
            <h2>Регистрация</h2>
            <input id='login' type={"text"} placeholder={'Введите логин '}/>
            <input id='password' type={"password"} placeholder={'Введите пароль'}/>
            <input id='email' type={"email"} placeholder={'Введите почту'}/>
            <button onClick={signUp}>Сохранить</button>
            {
                loading ? <Icons name='loadder'/> :null
            }
        </>
    )
}

// function mapDispatchToProps(dispatch) {
//     return {
//         setModalBox: modalBox => {
//             dispatch(setModalBoxAction(modalBox))
//         }
//     }
// }
// export default connect(null,mapDispatchToProps) (Registration);
export default Registration

