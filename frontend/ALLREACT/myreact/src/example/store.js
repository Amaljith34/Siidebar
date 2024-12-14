import { createStore } from "redux";
import counterReducer from "../../../my-react-app/src/redux/counter/counterReducer";

 export const store=createStore(counterReducer)