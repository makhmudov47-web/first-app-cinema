import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth:false,
        user:{
            login:"",

        }

    },
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action) => {
            state.user.login = action.payload.login;
        }
    }
})

export const { setIsAuth , setUser } = authSlice.actions;
export default authSlice.reducer;