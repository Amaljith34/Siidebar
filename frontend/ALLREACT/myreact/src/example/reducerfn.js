// // reducer.js
// import { INCREMENT, DECREMENT } from './action';

import { DECREMENT, INCREMENT } from "./action";


// const initialState = {
//     count: 0
// };

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             };
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1
//             };
//         default:
//             return state; // Correctly return the current state for unhandled action types
//     }
// };

// export default counterReducer;

;

// import { DECREMENT, INCREMENT } from "./counterType";

const initialState={
    count:0
}

const counterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count:state.count + 1
            }
            case DECREMENT:
            return{
                ...state,
                count:state.count - 1
            }
    
        default:
            return state
    }
}
export default counterReducer
