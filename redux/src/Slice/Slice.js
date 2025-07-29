import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count:0,
    bg:"white"
}
const appSlice = createSlice(
    {
        name:"app",
        initialState,
        reducers:{
            increment:(state)=>{state.count+=1},
            decrement:(state)=>{state.count-=1},
            changeColor:(state,action)=>{state.bg=action.payload}
        }
    }
)

export const {increment,decrement,changeColor} = appSlice.actions

export default appSlice