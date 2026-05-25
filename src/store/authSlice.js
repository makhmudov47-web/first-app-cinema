import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth:false,
        user:{
            login:"",
            token:"",

        }

    },
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setLogin: (state, action) => {
            state.user.login = action.payload;
        }
    }
})

export const { setIsAuth , setLogin } = authSlice.actions;
export default authSlice.reducer;