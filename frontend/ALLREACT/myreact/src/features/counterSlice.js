import {createSlice} from '@reduxjs/toolkit'

// import { createSlice } from "@reduxjs/toolkit"

const initialState={
    count1:0,
    count2:10
}

const countSlice=createSlice({
    name:'counter',
    // initialState:InitialState
    initialState,
    reducers:{
        increment:(state)=>{
            state.count1=state.count1+1
        },
        decrement:(state)=>{
            state.count1=state.count1-1
        },
        incrementBy5:(state)=>{
            state.count2=state.count2+5
        },
        decrementBy5:(state)=>{
            state.count2=state.count2-5
        }
    }
})

export default countSlice.reducer;
export const {increment,decrement,incrementBy5,decrementBy5}=countSlice.actions


// const initialState={
//     count1:0
    
// }


// const countSlice=createSlice({
//     name:'counter',
//     initialState,
//     reducers:{
//         inicrement:(state)=>{
//            state.count1=state.count1+1
//         },
//         decrement:(state)=>{
//             state.count1=state.count1-1

//         }
//     }
// })
// export default countSlice
// export const {inicrement,decrement}=countSlice.actions