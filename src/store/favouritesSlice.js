import {createSlice} from "@reduxjs/toolkit";

export const favouritesSlice= createSlice({
    name: "favouritesSlice",
    initialState: {
        value: []
    },
    reducers: {
        setFavourites: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {setFavourites} = favouritesSlice.actions
export default favouritesSlice.reducer