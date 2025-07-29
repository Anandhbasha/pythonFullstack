import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../Slice/Slice";

export const store = configureStore({
    reducer:{
        app:appSlice.reducer
    }
})