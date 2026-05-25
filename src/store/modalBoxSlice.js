import {createSlice} from "@reduxjs/toolkit";

export const modalBoxSlice = createSlice({
    name:'modalBox',
    initialState:{
        value:''
    },
    reducers: {
        setModalBox: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setModalBox} = modalBoxSlice.actions

export default modalBoxSlice.reducer