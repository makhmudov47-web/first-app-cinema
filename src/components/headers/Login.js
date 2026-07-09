import React , {    }from "react";
// import setModalBoxAction from "../../redux/actions/actionModalBox";
// import {connect} from "react-redux";
import {useDispatch} from "react-redux";
import {setModalBox} from "../../store/modalBoxSlice";
import {setIsAuth, setUser} from "../../store/authSlice";
import Icons from "../../assets/icons/Icons";

const Login = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);


    function signIn()
    {

        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;

        const data = {
            login: login,
            password: password
        };
        console.log("data", data)

        const api = 'http://localhost:9999/auth/login';
        setLoading(true);
        fetch(api, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(data)
        })
            .then(result => result.json())
            .then((result) => {
                setLoading(false);
                if (result && result.message) {
                    console.log(result);
                    if (result.token) {
                        localStorage.setItem("token", result.token);
                        dispatch(setIsAuth(true));
                        dispatch(setUser({login}));
                        dispatch(setModalBox(''));
                    }

                }
            })

    }

    return (<>
        <h2>Вход</h2>
        <input id="login" type={"text"} placeholder={'Введите логин '}/>
        <input id="password" type={"password"} placeholder={'Введите пароль'}/>

        <button onClick={signIn}>Войти</button>
        {
            loading ? <Icons name='loadder'/> :null
        }

    </>)
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