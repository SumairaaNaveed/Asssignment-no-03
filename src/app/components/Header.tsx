import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-rose-800 h-12'>
        <div className='text-yellow-600 flex justify-between items-center'>
   <h1 className='text-xl m-2 cursor-pointer'>Header</h1>
   <ul className=' flex gap-4 mr-4 cursor-pointer'>


    <Link className='hover:text-blue-800' href= "/">Home</Link>
    <Link className='hover:text-blue-800' href= "/">About</Link>
    <Link className='hover:text-blue-800' href= "/">Skills</Link>
    <Link className='hover:text-blue-800' href= "/">Contact</Link>

    </ul>
    </div>
    


    </div>
  )
}

export default Header
