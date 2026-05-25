import React from 'react';
import "../../src/styles/mainStyles//ModalBox.css"
// import setModalBoxAction from "../redux/actions/actionModalBox";
// import {connect} from "react-redux";
import {useDispatch} from "react-redux";
import {setModalBox} from "../store/modalBoxSlice";

const ModalBox = ({ children}) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className='echo' onClick={() => dispatch(setModalBox(''))}>

            </div>
            <div className='ModalBox'>
                {children}
            </div>
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
// export default connect(null,mapDispatchToProps) (ModalBox);
export default ModalBox;