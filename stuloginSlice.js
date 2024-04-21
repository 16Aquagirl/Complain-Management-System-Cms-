import { createSlice } from "@reduxjs/toolkit";
const initialState={
    stuid:"",
    stuuser:"",
    stuauth:false
}

const stuloginSlice=createSlice({
    name:"stulogin",
    initialState:initialState,
    reducers:{
        stulogin: (state, action) => {
          //console.log(action.payload);
            state.stuuser = action.payload.stunm;
            state.stuid=action.payload.stuid;
            state.stuauth = true;
            
          },
          stulogout: (state) => {
            state.stuuser = null;
            state.stuauth = false;
          },
    }
});


export const {stulogin, stulogout} = stuloginSlice.actions;
export default stuloginSlice.reducer;