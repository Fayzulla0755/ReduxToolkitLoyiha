import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";
const initialState = {
  isLoading: false,
  loggetIn: false,
  error: null,
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
      state.error=null
    },
    signUserSuccess: (state,action) => {
      state.loggetIn = true;
      state.isLoading = false;
      state.error=null
      state.user=action.payload
      setItem('token',action.payload.token)
    },
    signUserFailure: (state,action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser:(state)=>{
      state.loggetIn=false
      state.user= null
    }
  },
});

export const { signUserStart, signUserSuccess, signUserFailure,logoutUser } =
  authSlice.actions;
export default authSlice.reducer;
