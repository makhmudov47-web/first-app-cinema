import modalBox from "../../components/ModalBox";
const intialState = {
    modalBox: ''    ,

}

export default function getModalBox(state = intialState , action ) {
    switch (action.type) {
        case 'SET_MODALBOX':
            return {...state, modalBox: action.payload}
        default:
            return state
    }
}