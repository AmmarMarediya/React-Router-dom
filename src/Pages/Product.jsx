import React from 'react'
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex gap-5 py-2  items-center justify-center'>
      <Link to='/man'>Man</Link>
      <Link to='/woman'>Woman</Link>

    </div>
  )
}

export default Product
