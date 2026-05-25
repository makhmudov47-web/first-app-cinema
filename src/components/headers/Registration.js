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
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            dispatch(setModalBox(''));
        } , 3000)

    }
    return (
        <>
            <h2>Регистрация</h2>
            <input type={"text"} placeholder={'Введите логин '}/>
            <input type={"password"} placeholder={'Введите пароль'}/>
            <input type={"email"} placeholder={'Введите почту'}/>
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

