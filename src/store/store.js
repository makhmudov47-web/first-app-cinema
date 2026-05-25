import {configureStore} from "@reduxjs/toolkit";
import modalBoxSlice from "./modalBoxSlice";
import favouritesSlice from "./favouritesSlice";
import authSlice from "./authSlice";
import basketSlice from "./basketSlice";

export default  configureStore({
    reducer: {
        modalBox:modalBoxSlice,
        favourites:favouritesSlice,
        auth:authSlice,
        basket:basketSlice

    }

})