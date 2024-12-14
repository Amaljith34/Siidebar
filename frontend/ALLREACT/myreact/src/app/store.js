// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "../features/counterSlice";

// export const store=configureStore({
//     reducer:{
//         counter:counterSlice
//     }
// })
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counterSlice';
import formSlicer from '../features/formSlicer';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        form:formSlicer
    },
});
