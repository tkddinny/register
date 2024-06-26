import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='w-full pt-2 pb-4 px-12 flex justify-between capitalize items-center bg-slate-800 text-white'>
        <h2 className='text-3xl'><Link to='/' >logo</Link></h2>
        <ul className='flex gap-6 items-center'>
          <li><Link to='/'>register</Link></li>
          {
            !window.location.pathname.includes('login') && <li><Link to='/login'>login</Link></li>
          }
          <li><Link to='/home'>home</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar