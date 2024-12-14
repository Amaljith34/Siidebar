
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './type'


const Counter = () => {
  const {count}=  useSelector((state)=>state.counter)
  const dispatch=useDispatch()
  return (
    <div>
        count:{count}
        <button
        onClick={()=>dispatch(increment())}
        >Increment</button>
        <button
        onClick={()=>dispatch(decrement())}
        >DECREMENT</button>
    </div>
  )
}

export default Counter

