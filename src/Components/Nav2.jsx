import React from 'react'
import {useNavigate} from 'react-router-dom'
const Nav2 = () => {
     const navigate = useNavigate()
  return (
    <div className='bg-cyan-900 text-white p-1'>
       <button onClick={()=>{
        navigate('/')
      }} className='bg-green-600 px-2 py-1 active:scale-95 cursor-pointer m-2 rounded '>Return To Home Page</button>
      <button className='bg-green-600 px-2 py-1 active:scale-95 cursor-pointer m-2 rounded ' onClick={()=>{
        navigate(-1)
      }}>Back</button>

      <button onClick={()=>{
        navigate(+1)
      }} className='bg-green-600 px-2 py-1 active:scale-95 cursor-pointer m-2 rounded '>Next</button>
    </div>
  )
}

export default Nav2
