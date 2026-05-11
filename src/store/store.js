import {configureStore} from "@reduxjs/toolkit";
import {modalBoxSlice} from "./modalBoxSlice";

export default  configureStore({
    reducer: {
        modalBox:modalBoxSlice
    },

})