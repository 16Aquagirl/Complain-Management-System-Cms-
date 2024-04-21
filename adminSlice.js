 import { createSlice } from "@reduxjs/toolkit";
  const initialState={
    adminname:"",
    adminid:"",
    auth:false
  }
 const adminSlice=createSlice({
   name:"adminuser",
   initialState:initialState,
   reducers:{
     adminlogin:(state, action)=>{
         state.adminname=action.payload.adname;
         state.adminid=action.payload.adid;
         state.auth=true;
     },
     adminlogout: (state)=>{
        state.adminname="";
        state.auth=false;
     }
   }
 });

 export const {  adminlogin, adminlogout} = adminSlice.actions;
 export default adminSlice.reducer;

