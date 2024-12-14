import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { submit } from './features/formSlicer'

const Form = () => {
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>form</h2>
        <input type='text' placeholder='enter the name'value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' placeholder='enter the age'value={age} onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={()=>dispatch(submit({name,age}))}>submit</button>
        
    </div>
  )
}

export default Form