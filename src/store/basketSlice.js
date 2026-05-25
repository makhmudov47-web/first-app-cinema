import {createSlice} from "@reduxjs/toolkit";
import basket from "../components/headers/Basket";

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        value:[]

    },
    reducers: {
        setBasket: (state, action) => {
            state.value = action.payload;
        },
        addFilmInBasket: (state, action) => {
            state.value.push(action.payload);
        },
        deleteFilmInBasket: (state, action) => {
            const result = state.value.filter((item) => item !== action.payload);
            state.value = result;
        }
    }
})

export const {setBasket , addFilmInBasket, deleteFilmInBasket} = basketSlice.actions;
export default basketSlice.reducer;