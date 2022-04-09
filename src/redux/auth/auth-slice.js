import { createSlice } from '@reduxjs/toolkit';
import {signup,login,logout,current} from '../../redux/auth/auth-operations';


const initialState = {
    user: {
        name: "",
        email: ""
    },
    token: "",
    isLogin: false,
    error: null,
    loading: false
};
const authSlice=createSlice({
    name:"auth",
    initialState,
    extraReducers:{
        [signup.pending]:(state)=>{
            state.loading=true
            state.eror=null
        },
        [signup.fulfilled]:(state,{payload})=>{
            state.user={...payload.user}
            state.token=payload.token
            state.isLogin=true
            state.loading=false
            state.eror=null
         
        },
        [signup.rejected]:(state,{payload})=>{

            state.eror=payload
            state.loading=false
        },
        [login.pending]:(state)=>{
            state.loading=true
            state.eror=null
        },
        [login.fulfilled]:(state,{payload})=>{
            state.user={...payload.user}
            state.token=payload.token
            state.isLogin=true
            state.loading=false
            state.eror=null
        },
        [login.rejected]:(state,{payload})=>{

            state.eror=payload
            state.loading=false
        },
        [logout.pending]:(state)=>{
            state.loading=true
            state.eror=null
        },
        [logout.fulfilled]:(state,{payload})=>{
            state.user={...payload.user}
            state.token=payload.token
            state.isLogin=false
            state.loading=false
            state.eror=null
        },
        [logout.rejected]:(state,{payload})=>{
            state.eror=payload
            state.loading=false
        },
        [current.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [current.fulfilled]: (state, {payload}) => {
            console.log(payload);
            state.user = {...payload};
            state.loading = false;
            state.isLogin = true;            
        },
        [current.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;            
        },
    }

})


export default authSlice.reducer