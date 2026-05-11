import {createSlice} from "@reduxjs/toolkit";

export const modalBoxSlice = createSlice({
    name:'modalBox',
    initialState:{
        value:''
    },
    reducers: {
        getModalBox: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {modalBox} = modalBoxSlice.actions

export default modalBoxSlice.reducer