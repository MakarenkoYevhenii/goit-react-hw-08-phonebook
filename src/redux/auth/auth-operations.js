import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../shared/api/authApi';


export const signup=createAsyncThunk(
    "auth/signup",
    async(data,{rejectWithValue})=>{
        try {
            const result=await authApi.signup(data)
            return result
        } catch (error) {

          return  rejectWithValue(error)
        }
    }
)


export const login=createAsyncThunk(
    "auth/login",
    async(data,{rejectWithValue})=>{
        try {
            const result=await authApi.login(data)
  
            return result
        } catch (error) {

          return  rejectWithValue(error)
        }
    }
)
export const logout=createAsyncThunk(
    "auth/logout",
    async(_,{rejectWithValue})=>{
        try {
            const result=await authApi.logout()

            return result
        } catch (error) {
            console.log(error);
          return  rejectWithValue(error)
        }
    }
)


export const current = createAsyncThunk(
    "auth/current",
    async (_, {getState, rejectWithValue}) => {
        try {
            const {auth} = getState();
            // if(!auth.token){
            //     return rejectWithValue("Not autorization");
            // }
            const result = await authApi.getCurrent(auth.token);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (_, {getState}) => {
            const {auth} = getState();
            if(!auth.token) {
                return false;
            }
        }
    }
)
