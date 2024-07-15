
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    collapsed: true,
    see: true,
    width:false,
    brand:[]
    
  },
  reducers: {
  

    setcollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
    setsee: (state, action) => {
      state.see = action.payload;
    },
    setwidth: (state, action) => {
      state.width = action.payload;
    },
    setbrand: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { setcollapsed, setwidth,setsee } = counterSlice.actions;

export default counterSlice.reducer;
