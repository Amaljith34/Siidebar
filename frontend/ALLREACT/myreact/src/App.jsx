import "./App.css";
import {useSelector,useDispatch} from "react-redux";
import { decrement, decrementBy5, increment, incrementBy5 } from "./features/counterSlice";
import Form from "./Form";

function App() {
  const { count1,count2 } = useSelector((state) => state.counter);
 const dispatch=useDispatch()
const {name,age}=useSelector((state)=>state.form)
  
  return (
    <>
      <h2>count:{count1}</h2>
      
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <br>
      </br>
      <h2>count:{count2}</h2>
      <button onClick={()=>dispatch(incrementBy5())}>incrementy5</button>
      <button onClick={()=>dispatch(decrementBy5())}>decrementBy5</button>
      <Form/>
      <h1>name:{name}</h1>
      <br />
      <h3>age:{age}</h3>

    </>
  );
}

export default App;


