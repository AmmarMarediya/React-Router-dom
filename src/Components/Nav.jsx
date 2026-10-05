import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='bg-cyan-800 p-3 text-white flex justify-between'>
        Ammar
        <div className=' flex gap-4 mr-7'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Product'>Product</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Course'>Course</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
