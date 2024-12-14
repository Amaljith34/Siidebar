import React from 'react'

import { decrement, increment } from './type'
import { useDispatch, useSelector } from 'react-redux';

const countercomponent = () => {
    const count=useSelector((state)=>state.value)
    
    const dispatch=useDispatch()
  return (

    
    <div>
      <label>count:{count.value}</label>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default countercomponent
