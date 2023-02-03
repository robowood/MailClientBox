import { createSlice } from "@reduxjs/toolkit";
const initialAuthState={
    isAuthenticated:!!localStorage.getItem('token')
};
 const authSlice=createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducer:{
        isLogin(state){
            state.isAuthenticated=true

        },
        isLogout(state){
            localStorage.removeItem('token');
            state.initialAuthState=false

        }
    }
})
export const authAction=authSlice.actions;
export default authSlice.reducer;