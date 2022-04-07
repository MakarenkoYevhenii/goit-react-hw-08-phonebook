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