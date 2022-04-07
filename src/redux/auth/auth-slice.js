import { createSlice } from '@reduxjs/toolkit';
import loading from 'components/Loading/Loading';
import {signup} from '../../redux/auth/auth-operations';


const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLogin: false,
  eror:null,
  loading:false
};

const authSlice=createSlice({
    name:"auth",
    initialState,
    extraReducers:{
        [signup.pending]:(state)=>{
            state.loading=true
            state.eror=null
        },
        [signup.fulfield]:(state,{payload})=>{
            state.user={...payload}
            state.token=payload.token
            state.isLogin=true
            state.loading=false
            state.eror=null
        },
        [signup.reject]:(state,{payload})=>{
            state.eror=payload
            state.loading=false
        }
    }

})

export default authSlice.reducer